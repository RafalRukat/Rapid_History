
    fetch('/funFact').then(response => response.json()).then(data => {
        const openingQuestion = document.querySelector('.welcome__opening-question');
        const answer = document.querySelector('.welcome__answer');
        const invitation = document.querySelector('.welcome__invitation');


        openingQuestion.textContent = `Do you know what happened in ${data.year}?`;
        answer.textContent = data.eventDescription;
        invitation.textContent = "Let's play Rapid History and test your knowledge on historical facts!";

    });

//todo przenieść tu html, żeby wykonywał się razem z fetchem