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

function Users() {
  const items = useSelector(selectUsersItems);
  const loading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);
  const dispatch = useDispatch();
  console.log(items);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
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
        </div>
      ))}
    </div>
  );
}

export default Users;
