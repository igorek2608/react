import React from 'react'

function ListItem({title, id, onClick}) {
    
   
 




    return (
        <div onClick={onClick}>
            {`${title} ${id}  `} 
            
            
        </div>
    )
}

export default ListItem
