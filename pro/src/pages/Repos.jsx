import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRepos } from "../store/repos/actions";
import {
  selectReposItems,
  selectReposError,
  selectReposLoading,
} from "../store/repos/selectors";
import "./Repos.scss";

function Repos() {
  const [value,setValue]=useState('')
  const items = useSelector(selectReposItems);
  const loading = useSelector(selectReposLoading);
  const error = useSelector(selectReposError);
  const dispatch = useDispatch();
  console.log(items);
  useEffect(() => {
    dispatch(fetchRepos());
  }, []);

  const filteredRepos=items.filter((item)=>{
    return item.name.toLowerCase().includes(value.toLocaleLowerCase())
  })





  return (
    <div className="repos">
      <h1>Список репозиториев</h1>
      <div className="search-wrapper">
        <input className="search" type="name" placeholder="search" onChange={(event=>setValue(event.target.value))}></input>
      </div>
      {filteredRepos
        .sort((a, b) => {
          if (b.stargazers_count > a.stargazers_count) return 1;
          else if (b.stargazers_count < a.stargazers_count) return -1;
          return 0;
        })
        .map((item) => (
          <div className="repos-item">
            <h3 className="repos-title">Name:{item.name}</h3>
            <ul className="repos-description">
              <li key={item.id}>Nmber of stars:{item.stargazers_count}</li>
              <li>Date of last commits:{item.pushed_at}</li>
              <li>Link to GitHub:{item.git_url}</li>
            </ul>
          </div>
        ))}
    </div>
  );
}

export default Repos;
