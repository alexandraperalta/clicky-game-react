import React from "react";
import "./Header.css";

const Header = props => (
    <div>
        Score: {props.score}
        High Score: {props.highScore}
    </div>
);
export default Header;