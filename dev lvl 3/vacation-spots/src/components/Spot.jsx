import React from 'react'

export default function Spot(props) {
    let dollar
    if (props.price < 500){
        dollar = '$'
    } else if (props.price < 1000){
        dollar = '$$'
    } else {
        dollar = '$$$'
    }

    return (
        <div className='spot'>
            <img src={`${props.img}`}/>

            <div className='spot--info'>
                <h1>{props.place}</h1>
                <hr />
                <h2>Total trip cost: {dollar} ${props.price}</h2>
                <h3>Time of year we should go: {props.time}</h3>
                <hr />
            </div>
        </div>
    )
}