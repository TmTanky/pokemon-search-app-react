import React from 'react'
import {Link} from 'react-router-dom'

// CSS
import './header.styles.css'

const Header = () => {
    return (
        <nav>
            <div className="navlogo">
                <span> <img src="https://img.icons8.com/plasticine/1000/000000/pokeball.png" className="logones"/> <h2> PokeSearch </h2> </span>
            </div>

            <div className="navlinks">
                <li> <Link to="/"> Search </Link> </li>
                <li> <Link to="/contact"> About </Link> </li>
            </div>
        </nav>
    )
}

export default Header