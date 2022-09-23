function gameRoutes(app) {
    const fetch = require("node-fetch");
    const {getRandomInt,  shuffleTheArray} = require('../tools/my-tools');

    const questions = [];

    class Question {
        constructor() {
            this.year = getRandomInt(101, 2021);
            this.answers = [
                {
                    content: this.year.toString(),
                    // isCorrect: true
                },

                {
                    content: (this.year + getRandomInt(5, 150)).toString(),
                    // isCorrect: false
                },
                {
                    content: (this.year - getRandomInt(5, 150)).toString(),
                    // isCorrect: false
                },
                {
                    content: (this.year + getRandomInt(100, 400)).toString(),
                    // isCorrect: false
                }
            ]
        }


        shuffleTheAnswers(){
            this.answers = shuffleTheArray(this.answers);
        }

        generateQuestion() {
            fetch(`http://numbersapi.com/${this.year}/year`).then(res => res.text()).then((data) => {
                if (data.includes('NaN') || data.includes('nothing')) {this.generateQuestion()} else {
                    const result = data.replace(`${this.year} is the year that`, 'Guess the year of this event:');
                    this.question = result;
                }
                }
            );
        }

        generateFunFact(){
            fetch(`http://numbersapi.com/${this.year}/year`).then(res => res.text()).then((data) => {
                if (data.includes('NaN') || data.includes('nothing')) {console.error('dziadoska odpowiedź!')} else {
                    const result = data;
                    this.answer = result;
                }
            })
        }
    }

    let goodAnswers = 0;

    app.get('/funFact', (req, res) => {
        console.log('jest źądanie');
        const funFact = new Question();
        funFact.generateFunFact();
        setTimeout(() => {
            const {answer, year,} = funFact;
            console.log(answer, year);
            res.json({
                answer, year,
            })
        }, 400);
    });

    app.get('/question', (req, res) => {
            const nextQuestion = new Question();
            nextQuestion.generateQuestion();
            questions.push(nextQuestion);
            nextQuestion.shuffleTheAnswers();
        setTimeout(() => {
                const {question, answers, year,} = nextQuestion;
                res.json({
                    question, answers, year,
                })
            }, 500);
    });

    app.post(`/answer/:year`, (req, res) => {
        const theQuestion = questions[questions.length - 1];
        const ifCorrect = Number(req.params.year) === theQuestion.year;
        if (ifCorrect){
            goodAnswers++
        }
        res.json({
            correct: ifCorrect,
            goodAnswers,
            theQuestion,
        });
    });
};

module.exports = gameRoutes;