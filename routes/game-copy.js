const {getRandomInt, shuffleTheArray} = require("../tools/my-tools");
const fetch = require("node-fetch");

function gameRoutes(app) {
    const fetch = require("node-fetch");
    const {getRandomInt, shuffleTheArray, add, subtract} = require('../tools/my-tools');

   const anonymousPlayer = {
       allAnswers: 0,
       correctAnswers: 0,
       lastCorrectAnswer: "",
   }

    //funkcja dodająca fałszywe opcje do danego roku

    function getYearsToChoose(year){
        const years = [year];
        const getAnotherOption = () => {
            const addOrSubstract = getRandomInt(0,1);
            const difference = getRandomInt(90,400);
            let anotherOption = Number;
            if (addOrSubstract === 1) {
                anotherOption = year + difference;
            } else {
                anotherOption = year - difference;
            };
            if ((anotherOption < 1) || (anotherOption > 2020)) {
                getAnotherOption();
            } else {
                years.push(anotherOption);
            }
        }
        for (let i=0; i < 3; i++){
            getAnotherOption()
            }
        const yearsShuffled = shuffleTheArray(years)
        return yearsShuffled;
        }

    app.get('/funFact', (req, res) => {
        const theYear = getRandomInt(1, 2000);
        const getFunFact = () => {
        fetch(`http://numbersapi.com/${theYear}/year`).then(res => res.text()).then((data) => {
            if (data.includes('NaN') || data.includes('nothing')) {
                console.error('dziadoska odpowiedź!')
            } else {
                res.json({year: theYear,
                eventDescription: data})
            }
        });
        };
        getFunFact();
    });

    //zgadnij rok na podst. eventu:

    app.get('/question/:firstOrNext', (req, res) => {
        if (req.params.firstOrNext === "first"){
            anonymousPlayer.correctAnswers = 0;
            anonymousPlayer.allAnswers = 0;
        }
        const theYear = getRandomInt(1, 2000);
        anonymousPlayer.lastCorrectAnswer = theYear;
        const getQuestion = () => {
            fetch(`http://numbersapi.com/${theYear}/year`).then(res => res.text()).then((data) => {
                    if (data.includes('NaN') || data.includes('nothing')) {
                        getQuestion();
                    } else {
                        const question = data.replace(`${theYear} is the year that`, 'Guess the year of this event:');
                        const answers = getYearsToChoose(theYear);
                        console.log(theYear);
                        res.json({
                            question,
                            answers,
                        });

                    }
                }
            );
        };
        getQuestion();
    });

    app.post('/answer/:year', (req, res) => {
        anonymousPlayer.allAnswers++;
        if (Number(req.params.year) === anonymousPlayer.lastCorrectAnswer){
            anonymousPlayer.correctAnswers++;
        };
        const {allAnswers, correctAnswers} = anonymousPlayer;
        res.json({
            allAnswers,
            correctAnswers,
        });
    });




//     app.post(`/answer/:year`, (req, res) => {
//         const theQuestion = questions[questions.length - 1];
//         const ifCorrect = Number(req.params.year) === theQuestion.year;
//         if (ifCorrect){
//             goodAnswers++
//         }
//         res.json({
//             correct: ifCorrect,
//             goodAnswers,
//             theQuestion,
//         });
//     });
// };
}
module.exports = gameRoutes;

//todo zrób obsługę losowania odpowiedzi, żeby nie przekraczały 1 i 2000 r.
//todo być może dałoby się objąć wszystko jedną funkcją z parametrem options
//todo rozszerzyć zakres dat na pne?

