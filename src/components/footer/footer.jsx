import React from 'react'

// CSS
import './footer.styles.css'

const Footer = () => {

    const getYear = new Date().getFullYear()

    return (
        <footer>
            <h3> Copyright &copy; PokeSearch {getYear} </h3>
        </footer>
    )
}

export default Footer