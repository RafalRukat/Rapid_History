import React, {useContext, useEffect, useState} from "react";

export const FaqOneItem = props => {
    const [answerVisible, setAnswerVisible] = useState(false);
    const toggleAnswersVisibility = () => {
        setAnswerVisible(!answerVisible);
    }

    return (
    <li className="Faq__one-item">
        <h2 className="Faq__question" onClick={toggleAnswersVisibility}>{props.question}</h2>
        <p className={answerVisible ? "Faq__answer--visible" : "Faq__answer"}>{props.answer}</p>
    </li>
    )
}