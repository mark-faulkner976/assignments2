import React from 'react'

export default function Places(props) {
    console.log("im working")
    return (
        <div className='places'>
            <img className='places--personalPhoto' src={props.img}/>
            <div className='places--box'>
                <span className='places--location'>{props.location} 
                    <span className='places--google' href={props.google}>View on Google maps</span> 
                </span>
                <span className='places--title'>{props.title}</span>
                <span className='places--date'>{props.startDate} - {props.endDate}</span>
                <span className='places--description'>{props.description}</span>
            </div>
            <hr/>
        </div>
    )
}