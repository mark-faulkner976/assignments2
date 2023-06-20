import React, { useState } from "react";
import AddBountyForm from './AddBountyForm'

export default function Bounty( props ) {
    const { firstName, lastName, living, bountyAmount, type, _id } = props
    const [ editToggle, setEditToggle ] = useState(false)

    return (
        <div className="bounty">
            { !editToggle ?
            <>
                <h1>Name: { firstName } { lastName } </h1>
                <h2>Reward: { bountyAmount } Galactic Credits</h2>
                { !living ? <p>Bounty completed</p> : <p>At large</p>}
                <h3>Affiliation: { type }</h3>
                <button className="delete-btn"
                    onClick= { () => props.deleteBounty( _id ) }>
                    Turn in Bounty
                </button>
                <button className="edit-btn"
                    onClick={ () => setEditToggle( prevToggle => !prevToggle ) }>
                    Edit
                </button>
            </> 
            :
            <>
                <AddBountyForm 
                    firstName = { firstName }
                    lastName = { lastName }
                    living = { living }
                    bountyAmount = { bountyAmount }
                    type = { type }
                    _id = { _id }
                    btnText = "Submit Edit"
                    editBounty = { props.editBounty }
                    setEditToggle = { setEditToggle }
                    editToggle = { editToggle }
                />
                <button onClick={ () => setEditToggle( prevToggle => !prevToggle ) }>
                    Close
                </button>
            </> 
            }
        </div>
    )
}