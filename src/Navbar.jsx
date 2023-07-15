import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <nav className="navbar">
            <h1>Daily-Diary</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Log</Link>
            </div>
        </nav>
    )
}