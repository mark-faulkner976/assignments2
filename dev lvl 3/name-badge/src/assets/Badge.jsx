import React from "react";
import { useState } from "react";

        // firstName= {person.firstName}
        // lastName= {person.lastName}
        // phone= {person.phone}
        // email= {person.email}
        // birth= {person.birthPlace}
        // food= {person.favFood}
        // info= {person.personal}

export default function Badge(props) {
    return(
        <div className="badges">
            <div className="badges--1">
                <div>
                    Name: {props.firstName} {props.lastName}
                </div>
                <div >
                    Phone: {props.phone}
                </div>
            </div>
            <div className="badges--2">
                <div>
                    Place of birth: {props.birth}
                </div>
                <div>
                    Favorite food: {props.food}
                </div>
            </div>
            <div className="badges--3">
                <div className="badges--email">
                    Email: {props.email}
                </div>
            </div>
            <div className="badges--4">
                {props.info}
            </div>
        </div>
    )
}