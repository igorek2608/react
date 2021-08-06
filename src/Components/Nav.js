import React from 'react'
import NavLink from './NavLink'
import '../CSS/Nav.css'
import {Link} from 'react-router-dom'


function Nav() {

    


    return (
        <div >
             <ul className='nav'>
                 <li style={{listStyle:'none'}}><Link className='nav-link' to='/'>Home</Link></li>
                 <li style={{listStyle:'none'}}><Link className='nav-link' to='/Contacts'>Contacts</Link></li>
                 <li style={{listStyle:'none'}}><Link className='nav-link' to='/Projects'>Projects</Link></li>
             </ul>
        </div>
    )
}

export default Nav
