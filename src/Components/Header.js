import React from 'react'
import '../CSS/Header.css'
import logo from '../logo.png'
import Nav from './Nav'
import '../CSS/Header__inner.css'



function Header() {
    return (
        <div className='header'>
            <div className='header__inner'>
                <div style={{display:'flex', justifyContent:'left'}}>
                    <img src={logo} alt={'logo'} style={{width:"5%"}}></img>
                </div>
                <Nav></Nav>
            </div>
        </div>
    )
}

export default Header
