import React from "react";
import "./style.css";

function Header(props){
    return(
        <nav className="navbar fixed-top navbar-light bg-light">
            <p className="navbar-brand">Clicky-Game</p>
            <p className="navbar-brand">Score: {props.score}</p>
            <p className="navbar-brand">High Score: {props.highScore}</p>            
        </nav>
    )
}

export default Header