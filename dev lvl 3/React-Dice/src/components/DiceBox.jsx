import React from "react";
import { useState } from "react";
import Die from "./Die"

export default function DiceBox() {
    const [num, setNum] = useState([1, 2, 3, 4, 5])
    function random() {
        setNum(Array.from( {length: 5}, () => Math.floor(Math.random() * 6 + 1)))
        console.log(num)
    }

    const die = num.map(mapDice => {
        return (
            <Die 
                die = {mapDice}
            />
        )
    })

    return (
        <div>
            <div className="die">
                {die}
            </div>
            <button onClick={random}>Randomize!</button>
        </div>
    )
}