import React from 'react'
import Navbar from './Navbar'

export default function Header() {
    return (
        <div className='header'>
            <nav>
                <div className='header--left'>
                    <span>Start Bootstrap</span>
                </div>
                <Navbar />
            </nav>
            <div>
                <h1>Clean Blog</h1>
                <span className='header--subheading'>A Blog Theme by Start Bootstrapper</span>
            </div>
        </div>
    )
}