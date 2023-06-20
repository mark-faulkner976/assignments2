import React from "react";

export default function Pet(props) {
    
    return (
        <div>
            <div>Pet name: {props.petsName} Pet breed: {props.breed}</div>
        </div>
    )
}