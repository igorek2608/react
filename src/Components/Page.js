import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'
import Footer from './Footer'
import '../CSS/Page.css'




function Page() {
    return (
        <div className='wrapper'>
            <Header></Header>
            <Sidebar></Sidebar>
            <Content></Content>
            <Footer></Footer>            
        </div>
    )
}

export default Page
