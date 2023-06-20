import React from 'react'

export default function Square(props) {
    return (
        <div style={{backgroundColor: props.color}} className='square' id={props.color}>
            <h1></h1>
        </div>
    )
}