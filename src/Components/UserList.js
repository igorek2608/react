import React from 'react'
import User from './User'
import '../User.css'
import ComposableUser from './ComposableUser'
import '../UserList.css'
import UseHook from './useHook'




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

    let cont;
    const n=arr.map((i)=>i.name);
    for (let j=0;j<n.length; j++){
        const eNames=n[j].split('').includes('e');
        const arr=n[j].split('');
        console.log(arr)
        const changeNames=arr.splice(5,10,"...");
        const newNames= arr.join('')
        console.log(newNames)
        const lowerCaseName=n[j].toLowerCase();
        const palidromName=n[j].toLowerCase().split('').reverse().join('');

        
        if(n[j].length>4){
            cont=<span> { !eNames?`${newNames}`:`Its premiun user!${newNames}`}</span>
        } else if(lowerCaseName===palidromName){
            cont=<span className={'highlighted'}>{`its user ${n[j]}`}</span>

        } else {
            cont=<span>{`its user ${n[j]}`}</span>
        }
    }    
    
     
    
    return (
        <div>
            {arr.map((obj)=>(<User 
            name={obj.name} key={obj.id} className='name--highlighted'>
                
            </User>))}

            <ComposableUser>
               <div>
               {cont}
               
               </div>
            </ComposableUser>

            <UseHook></UseHook>
            
        </div>
    )
}

export default UserList
