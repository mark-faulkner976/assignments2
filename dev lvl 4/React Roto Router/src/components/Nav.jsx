import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <>
            <h1>aha you thought it was someone else, but it was ME, DIO</h1>
            <nav>
            <Link to='/' style={{padding: 5}}>
              Home
            </Link>
            <Link to='/about' style={{padding: 5}}>
              About
            </Link>
            <Link to='/services' style={{padding: 5}}>
              Services
            </Link>
            </nav>
      </>
    )
}