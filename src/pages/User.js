import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../store/users/actions";
import { selectUsersItems } from "../store/users/selectors";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";


function User() {
    const dispatch=useDispatch();
    const items= useSelector(selectUsersItems);
    useEffect(()=>{
        dispatch(fetchUsers)
    },[])

   

  return (
    
    <div>
        {items.map((item)=>item.id)}
        
    </div>
    
    
    );
}

export default User;
