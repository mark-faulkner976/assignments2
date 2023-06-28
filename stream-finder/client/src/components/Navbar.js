import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar( props) {
    const { logout } = props
    return (
        <div>
            <Link to='/profile'>Profile</Link> 
            <Link to='/'>Home</Link>
            <button onClick={ logout }>Logout</button>
        </div>
    )
}