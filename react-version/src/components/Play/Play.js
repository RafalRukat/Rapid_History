import React from 'react';
import "./Play.css"

export const Play = props => {

    return (
        <section className="Play">
            <div id="question" className="Play__question"></div>
            <button id="answer1" className="Play__answer" data-num="0"></button>
            <button id="answer2" className="Play__answer" data-num="1"></button>
            <button id="answer3" className="Play__answer" data-num="2"></button>
            <button id="answer4" className="Play__answer" data-num="3"></button>
            <h2 className="Play__correct-answers">Correct answers: <span id="correct-answers">0</span>/<span id="all-answers">0</span></h2>
        </section>
    )
}