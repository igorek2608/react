import React from 'react'
import NavLink from './NavLink'
import '../CSS/Nav.css'

function Nav() {

    const arr=[
        {id: "uniq1", name:"Main"}, 
        {id: "uniq2", name:"About us"}, 
        {id: "uniq3", name:"Projects"}, 
        {id: "uniq4", name:"Contacts"}, 
        
    ]


    return (
        <div className='nav'>
             {arr.map((el)=>(<NavLink name={el.name} key={el.id} className="nav-link">

             </NavLink>))}
        </div>
    )
}

export default Nav
