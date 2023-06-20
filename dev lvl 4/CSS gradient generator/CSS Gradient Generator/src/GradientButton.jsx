import React from 'react'
import { useState } from 'react'

export default function GradientButton() {

    const [color, setColor] = useState({
        shade1: "#0000FF",
        shade2: "#00FF00",
        shade3: "#FF0000",
        deg: 50,
        
      })
    
      function handleInput(event) {
        const {name, value} = event.target
        setColor(prevColor => ({
            ...prevColor,
            [name]: value
        }))
      }

      

      const gradientBackground = {
        backgroundImage: `linear-gradient(${color.deg}deg, ${color.shade1}, ${color.shade2}, ${color.shade3})`
      }

    return (
        <>
        <div className='codeGradient'>
            <div style={gradientBackground} width='75vh'>
                .
            </div>
                <textarea readOnly cols="50" rows="5" value={
                `background: linear-gradient(${color.deg}deg, ${color.shade1} , ${color.shade2}, ${color.shade3}); -moz-background: linear-gradient(${color.deg}deg, ${color.shade1} , ${color.shade2}, ${color.shade3}); -webkit: linear-gradient(${color.deg}deg, ${color.shade1} , ${color.shade2}, ${color.shade3})
                `
                }></textarea>
            
            <br/>
        </div>
            <h2>Options:</h2>
        <div className='options'>
            <span className='shade'>
                <span>Shade one:</span>
                <input type='color' name='shade1' onChange={handleInput} value={color.shade1} />
                <p>{color.shade1}</p>
            </span>

            <span className='shade'>
                <span>Shade two:</span>
                <input type='color' name='shade2' onChange={handleInput} value={color.shade2} />
                <p>{color.shade2}</p>
            </span>
            
            <span className='shade'>
                <span>Shade three:</span>
                <input type='color' name='shade3' onChange={handleInput} value={color.shade3} />
                <p>{color.shade3}</p>
            </span>
        </div>
            <input name='deg' onChange={handleInput} value={color.deg} type='number'/>
        </>
    )
}