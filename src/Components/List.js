import React,{useState} from 'react'
import ListItem from './ListItem'
import ReactDOM from "react-dom"



function List() {
    const array=[
        {id: "uniq1", title:"red"}, 
        {id: "uniq2", title:"black"}, 
        {id: "uniq3", title:"green"}, 
        
    ]

    const[list,setList]=useState(array)

    // function removeItem(index){
    //     console.log(index)
    //     setList([...list.slice(0, index), ...list.slice(index + 1)]);
    // }





    // const result=list.map((item,index)=>{
    //     return (
            
    //         <ListItem  title={item.title} key={index} id={item.id} onClick={()=>removeItem(index)}  >
                
    //         </ListItem>
            
    //     )
    // })

    

    // return(
        
    //    <div>
            
    //        {result}
    //    </div>
    // )

   const handleRemoveItem = (id) =>(e)=> {
        console.log(id, e)
        //  setList(list.filter(item => item.id !== id));
    };
           

    handleRemoveItem()

    return (
        <div>
          {list.map(item => {
            return (
                <>
                <ListItem  onClick={()=>handleRemoveItem} title={item.title} key={item.id} id={item.id}>
                  
                 </ListItem>
                
                </>

            );
          })}
          
        </div>
      );
};



export default List
