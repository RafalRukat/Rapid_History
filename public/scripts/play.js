const page = document.querySelector('.wrapper--play');
const panel = document.querySelector('.play-panel');
const question = document.querySelector('#question');
const buttons = document.querySelectorAll('button');
const correctAnswers = document.querySelector('#correct-answers');
const allAnswers = document.querySelector('#all-answers');



function fillQuestionElements(data) {
    question.innerText = data.question;
    for (const i in data.answers){
        const theAnswer = document.querySelector(`#answer${Number(i)+1}`);
        theAnswer.textContent = data.answers[i];
    }
}

function showNextQuestion (firstOrNext) {
    fetch(`/question/${firstOrNext}`).then(response => response.json()).then(data => {
        if (data.question.includes('undefined')){
            showNextQuestion()
        } else {
            fillQuestionElements(data);
            console.log(data);
        }
    });
}
showNextQuestion('first')

function sendAnswer (answer) {
    fetch(`/answer/${answer}`, {
        method: 'POST',
    }).then(response => response.json()).then(data => {
        if (data.allAnswers > 9){
           const result = document.createElement('h1');
           const playAgainButton = document.createElement('a');
           result.className = 'play-result';
            playAgainButton.className = 'play-again';
           result.textContent = `Your result is ${data.correctAnswers}/${data.allAnswers}`;
           playAgainButton.setAttribute('href', './play.html')
           playAgainButton.textContent = 'Play again';
            panel.replaceWith(result);
           page.appendChild(playAgainButton);
        } else {
            correctAnswers.textContent = data.correctAnswers;
            allAnswers.textContent = data.allAnswers;
            showNextQuestion('next');
        }
    });
}

for (const button of buttons){
    button.addEventListener('click', (event) => {
        sendAnswer(event.target.textContent);
    })
};

//todo przenieść elementy html do js



