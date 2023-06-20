import React from "react";
import Pet from './Pet'

export default function Friend(props) {
    
    console.log(props.pets)

    const animals = props.pets.map(pet => {
       
        return (
            <Pet 
                petsName = {pet.name}
                breed = {pet.breed}
            />
        )
    })
    // console.log(arr)
    return (
        <div>
            <h2>Friend's name: {props.friendName} Friend's age: {props.friendAge}</h2>
            {animals}
            <hr />
        </div>
    )
}