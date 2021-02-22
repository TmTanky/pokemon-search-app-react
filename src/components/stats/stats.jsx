import React from 'react'

// CSS
import './stats.styles.css'

const Stat = ({item, index}) => {
    return <h3 key={index}> {item.stat.name.toUpperCase()} - {item.base_stat} </h3>
}

export default Stat