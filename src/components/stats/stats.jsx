import React from 'react'

const Stat = ({item, index}) => {
    return <h1 key={index}> {item.base_stat} </h1>
}

export default Stat