import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/users/actions";
import {
  selectUsersItems,
 
} from "../store/users/selectors";

function Home() {
    const items = useSelector(selectUsersItems);
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
      }, []);


    return (
        <div>
            <h3>Зарегистрированно пользователей:{items.length} человек</h3>
        </div>
    )
}

export default Home
