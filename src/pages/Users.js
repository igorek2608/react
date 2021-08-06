import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/users/actions";
import {
  selectUsersItems,
  selectUsersLoading,
  selectUsersError,
} from "../store/users/selectors";
import "./Users.css";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import User from "./User";

function Users({match}) {
  console.log(match.url)
  const items = useSelector(selectUsersItems);
  const loading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);
  const dispatch = useDispatch();
  console.log(items);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

      
 

  return (
    <Switch>
    <div className="users">
      {loading && <div>Loading...</div>}
      {error && <div>Error loading data</div>}

      {items.map((item) => (
        
        <div className="users__item">
          <div className="users__item-header">
            <h2 className="users__item-login">{item.login}</h2>
          </div>
          <div>id:{item.id}</div>

          <div className="owner">
            <img src={item.avatar_url}></img>
          </div>
          <div className='wrapper-btn'>
              <NavLink to={`/Users/${item.id}`} className='primary-btn'>Перейти</NavLink>
              <Route path={`/Users/${item.id}`} component={User}></Route>
          </div>
        </div>
        
      ))}
      
    </div>
    </Switch>
    
  );
}

export default Users;
