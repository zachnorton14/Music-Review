import React from 'react'
import { useHistory } from 'react-router'

function NavBar(){

    const history = useHistory()

    return (
        <div>
            <li>
            <a href="#" onClick={() => history.push("/")}>
                    Home
                </a>
                <a href="#" onClick={() => history.push("/reviews")}>
                    Reviews
                </a>
            </li>
        </div>
    )
}

export default NavBar