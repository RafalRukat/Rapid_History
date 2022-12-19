import React from "react";
import {Link} from "react-router-dom";

export const NavigationOneItem = props => {

    return (
        <li className="Navigation__one-item">
           <Link className={"Navigation__link"} to={`/${props.name}`} onClick={props.name === "Home" ? props.reload : null}> {props.name} </Link>
        </li>
    );
};