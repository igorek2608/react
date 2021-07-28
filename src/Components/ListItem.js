import React,{useState} from 'react'

function ListItem({title, id, onClick}) {
    
   console.log(onClick)
 




    return (
        <div onClick={onClick}>
            {`${title} ${id}  `} 
            
            
        </div>
    )
}

export default ListItem
