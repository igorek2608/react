import React from 'react'
import User from './User'
import '../User.css'
import ComposableUser from './ComposableUser'
import '../UserList.css'
import Item from './Item'





function UserList() {

    const arr=[
        {id: "uniq1", name:"Paul"}, 
        {id: "uniq2", name:"Mary"}, 
        {id: "uniq3", name:"Viktor"}, 
        {id: "uniq4", name:"Suzanna"}, 
        {id: "uniq5", name:"Peter"}, 
        {id: "uniq6", name:"Vladislav"}, 
        {id: "uniq7", name:"Anna"}
    ]

      
    
    return (
        <div>
            {arr.map((obj)=>(<User 
            name={obj.name} key={obj.id} className='name--highlighted'>
                
            </User>))}

            <ComposableUser></ComposableUser>

            
            
        </div>
    )
}

export default UserList
