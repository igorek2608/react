import React from 'react'
import '../CSS/Nav-link.css'

function Navlink({name, className}) {
    return (
        <li className={className}>
            {name}
        </li>
    )
}

export default Navlink
