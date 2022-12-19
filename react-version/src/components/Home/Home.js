import React, {useEffect, useState} from "react";
import "./Home.css"



export const Home = (props) => {
    return (
        <div className="Home">
            {props.randomYear ? <h1>Do you know what happened in {props.randomYear}?</h1> : <h1>.....</h1>}
            {props.answer ? <h2>{props.answer}</h2> : <h2>...</h2>}
    <h2>Let's play Rapid History and test your knowledge on historical facts!</h2>
        </div>
    );
};