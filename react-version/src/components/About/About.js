import React, {useContext} from "react";
import { AppContext } from "../../AppContext"
import {AboutContentEN} from "./AboutContentEN";
import {AboutContentPL} from "./AboutContentPL";


import "./About.css"


export const About = (props) => {

    const { language } = useContext(AppContext);

    console.log(language)


    return (language === "EN" ? <AboutContentEN/> : <AboutContentPL/>)

            }