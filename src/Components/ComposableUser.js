import React from 'react'
import Item from './Item'




function ComposableUser() {
    const arr=[
        {id: "uniq1", name:"Paul"}, 
        {id: "uniq2", name:"Mary"}, 
        {id: "uniq3", name:"Viktor"}, 
        {id: "uniq4", name:"Suzanna"}, 
        {id: "uniq5", name:"Peter"}, 
        {id: "uniq6", name:"Vladislav"}, 
        {id: "uniq7", name:"Anna"}
    ]
    
    const names= arr.map(obj=>obj.name)
    console.log(names)
   
    


    return (    
        
        
        <Item   >
         <p>Victor</p>
            
        </Item>
        
        
                
          
        
    )
}



export default ComposableUser
