import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <Link to='/' style={{padding: 5}}>
              Home
            </Link>
            <Link to='/about' style={{padding: 5}}>
              About
            </Link>
            <Link to='/npclist' style={{padding: 5}}>
              NPC List
            </Link>
        </nav>
    )
}