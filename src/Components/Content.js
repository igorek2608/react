import React from 'react'
import '../CSS/Content.css'
import {Switch,Route} from 'react-router-dom'
import Contacts from './Contacts'
import Projects from './Projects'
import Home from './Home'

function Content() {
    return (
        <Switch>
            <div className='content'>
                <Route path='/' component={Home} exact></Route>
                <Route path='/Contacts' component={Contacts} ></Route>
                <Route path='/Projects' component={Projects} ></Route>
            </div>
        </Switch>
    )
}

export default Content
