import React, {useState, useContext} from "react";
import { UglyContext } from "./UglyContext";

export default function Header() {

    // was a test for the submit button before functionality
    function runPost() {
        return console.log(5)
      }
    
    const {handleChange, handleSubmit} = useContext(UglyContext)

    return (
        <>
        <div className="header">
            <input name='title' placeholder=" title" onChange={handleChange} type='text' />
      
            <input name="imgUrl" placeholder=" URL" onChange={handleChange} type='text' />

            <input name='description' placeholder=" description" onChange={handleChange} type='text' />

            <button className="add--entry" onClick={handleSubmit}>submit</button>
        </div>
        </>
    )
}