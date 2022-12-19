import React, {useContext, useEffect, useState} from "react"
import { AppContext } from "../../AppContext"
import {FaqOneItem} from "./FaqOneItem";

import "./Faq.css"

export const Faq = props => {

    const { actualYear, language } = useContext(AppContext);


    return (
        <section className="Faq">
            <h1 className="Faq__title">FAQ</h1>
            <ul className="Faq__list">
                <FaqOneItem
                    question={language === "EN" ? "What year is actually on agenda?" : "Który rok jest wylosowany?"}
                    answer={actualYear}
                />
                <FaqOneItem
                    question="What can I win in Rapid History?"
                    answer="A satisfaction. It is really worth. Even the Rolling Stones could not get it!"

                />
                <FaqOneItem
                    question="Can I really learn history playing Rapid History?"
                    answer="Of course, no. Have you really believed it? :-) I have made this app only to boost my porftolio!"
                />
            </ul>
        </section>
    )
}