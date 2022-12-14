import React, {useEffect, useState} from "react";
import {AppContext, defaultObject} from "../../AppContext";
import {Route, Routes} from "react-router";
import {Home} from "../Home/Home"
import {Navigation} from "../Navigation/Navigation";
import {Play} from "../Play/Play"
import {About} from "../About/About";
import {Faq} from "../Faq/Faq"

import {navigationItemsNames} from "../Navigation/navigationItemsNames";

import './App.css';

function App() {
    const [randomYear, setRandomYear] = useState(defaultObject.actualYear);
    const [answer, setAnswer] = useState(null);
    const [language, setLanguage] = useState('EN');
    useEffect(() => {
        const getAnswer = (async () => {
            console.log('pytam o ' + randomYear)
            const res = await fetch(`http://numbersapi.com/${randomYear}/year`);
            const data = await res.text();
            data.includes("NaN") ? getAnswer() : setAnswer(data);
        })();
    }, [randomYear]);

    const reloadRandomYear = () => {
        setRandomYear(Math.floor(Math.random() * 2010));
    };

    const toggleLanguage = (prevLanguage) => {
        setLanguage(() => {
            if (prevLanguage === 'EN') {return 'PL'} else {return 'EN'};
        });
        console.log (language);

    };

  return (
    <div className="App">
        <AppContext.Provider value={{actualYear: randomYear, language: language,}}>
      <Navigation itemsList={navigationItemsNames} reload={reloadRandomYear} toggleLanguage={toggleLanguage} />
        <Routes>
            <Route path="" element={<Home randomYear={randomYear.toString()} answer={answer}/>}></Route>
            <Route path="/Home" element={<Home randomYear={randomYear.toString()} answer={answer} />}></Route>
            {/*<Route path="/Sign in" element={<SignIn/>}></Route>*/}
            <Route path="/Play now" element={<Play/>}></Route>
            {/*<Route path="/Results" element={<About/>}></Route>*/}
            <Route path="/About" element={<About/>}></Route>
            <Route path="/FAQ" element={<Faq/>}></Route>
        </Routes>
        </AppContext.Provider>
    </div>
  );
}

export default App;
