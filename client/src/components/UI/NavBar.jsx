import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="nav">
            <Link to="/" className='p2'><p className="p1">Dashboard</p></Link>
            <p className="p2">Resources</p>
            <p className="p1">Contact Us</p>
            <p className="p2">About Us</p>
            <p className="p1">Forum</p>
            <Link to="/login" className='p2'><p className="p2">Log In</p></Link>
        </div>
    )
}

export default NavBar
