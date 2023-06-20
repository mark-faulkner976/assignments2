import React from "react";
import data from "../data";
import Friend from "./Friend";

export default function FriendList() {
    const friends = data.map(friend => {
        return (
            <Friend 
                key = {friend.name}
                friendName = {friend.name}
                friendAge = {friend.age}
                pets = {friend.pets}
            />
       ) 
    
    })
    
    return (
        <div>
            {friends}
            
        </div>
    )
}