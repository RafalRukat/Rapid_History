import React, {useState, useContext} from "react";
import { AppContext, defaultObject } from "../../AppContext";

import "./Language Handler.css"

export const LanguageHandler = ({toggleLanguage}) => {

    const {language} = useContext(AppContext);
    const handleLanguage = () => {
        toggleLanguage(language);
    }

    return (
        <AppContext.Provider value={language}>
        <span className="Navigation__one-item Language-handler" onClick={handleLanguage}>{language}</span>
        </AppContext.Provider>
    );
}




