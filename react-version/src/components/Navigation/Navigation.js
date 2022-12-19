import React from "react";
import {NavigationOneItem} from "./NavigationOneItem";
import {LanguageHandler} from "../LanguageHandler/LanguageHandler";


import "./Navigation.css"

export const Navigation = ({itemsList, reload, toggleLanguage}) => {

    return (
        <nav className="Navigation">
            <ul className="Navigation__menu">
                {itemsList.map((itemName) => {
                    return (
                    <NavigationOneItem name={itemName} key={itemName} reload={reload}/>
                );
                })}
                <LanguageHandler toggleLanguage={toggleLanguage}/>
            </ul>
        </nav>
    );
};