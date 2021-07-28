import React from 'react'
import '../CSS/Nav-link.css'
import {Link} from 'react-router-dom';

function Navlink({name, className}) {
    return (
        <>
            <li style={{listStyle:'none'}}>
            <Link className={className} to='/'>Main</Link>
            </li>
            
        </>
        
    )
}

export default Navlink
