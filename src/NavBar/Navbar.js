import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function NavBar(){

    return (
        <div>
            <li>
                <Link to="/">Home</Link>
                <Link to="/reviews">Reviews</Link>
            </li>
        </div>
    )
}

export default NavBar