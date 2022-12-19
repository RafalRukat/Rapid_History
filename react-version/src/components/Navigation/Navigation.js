import React from "react";
import {NavigationOneItem} from "./NavigationOneItem";

import "./Navigation.css"

export const Navigation = (props) => {

    return (
        <nav className="Navigation">
            <ul className="Navigation__menu">
                {props.itemsList.map((itemName) => {
                    return (
                    <NavigationOneItem name={itemName} key={itemName} reload={props.reload}/>
                    )
                })}
            </ul>
        </nav>
    );
};