import React from 'react'


//title subTitle author date
export default function BlogPost(props) {
    
    return (
        <div className='book--list'>
            <h2>{props.title}</h2>
            {props.subTitle && <span className='book--sub'>{props.subTitle} </span>}
            <span>written by: {props.author} on {props.date}</span>
            <hr />
        </div>
    )
}