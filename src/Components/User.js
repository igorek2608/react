import React from 'react';
import '../User.css';



function User({name, className}) {
    
    const eNames=name.split('').includes('e');
    const arr=name.split('');
   
    const changeNames=arr.splice(5,10,"...");
    const newNames= arr.join('')
   
    const lowerCaseName=name.toLowerCase();
    const palidromName=name.toLowerCase().split('').reverse().join('');
    

    let content;
    if(name.length>4){
        content=<span> { !eNames?`${newNames}`:`Its premiun user!${newNames}`}</span>
    } else if(lowerCaseName===palidromName){
        content=<span className={className}>{`its user ${name}`}</span>

    } else {
        content=<span>{`its user ${name}`}</span>
    }

    return(
        <div>{content}</div>
    )
     
}

export default User
