import React, {useContext} from "react";
import {ThemeContext} from '../themeContext'

export default function Button(props) {
    const {color, toggleTheme} = useContext(ThemeContext)

    return (
        <div className="buttonContainer">
            <button onClick={toggleTheme} className={`${color}-theme`}>Toggle Theme</button>
        </div>
    )
}