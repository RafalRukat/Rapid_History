import React, {useEffect, useState, createContext} from "react";
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

    const reloadRandomYear = () => {
        setRandomYear(Math.floor(Math.random() * 2010));
    }

    const [answer, setAnswer] = useState(null);

    // useEffect(() => {
    //     const getAnswer = async () => {
    //         console.log('pytam o ' + randomYear)
    //         const res = await fetch(`http://numbersapi.com/${randomYear}/year`);
    //         const data = await res.text();
    //         data.includes("NaN") ? getAnswer() : setAnswer(data);
    //     }
    //     getAnswer();
    // }, [randomYear]);

    useEffect(() => {
        const getAnswer = (async () => {
            console.log('pytam o ' + randomYear)
            const res = await fetch(`http://numbersapi.com/${randomYear}/year`);
            const data = await res.text();
            data.includes("NaN") ? getAnswer() : setAnswer(data);
        })();
    }, [randomYear]);


  return (
    <div className="App">
        <AppContext.Provider value={{actualYear: randomYear, setActualYear: reloadRandomYear}}>
      <Navigation itemsList={navigationItemsNames} reload={reloadRandomYear} />
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
