import React from "react";
import "./Header.css";
import logo from '../../logo.svg';

const Header = props => (
        <div className="App-header navbar">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React Clicky Game!</h1>
            <h3>Click on an image to earn points, but don't click on any more than once!</h3>
            <h2>Score: {props.score} |
            High Score: {props.highScore}</h2>
        </div>  
);
export default Header;