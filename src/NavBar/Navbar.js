import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(){

    return (
        <div className="navbar">
            <div className="navcontainer">
                <div className='logo'>
                    <h1>Spootify</h1>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/reviews">Reviews</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar