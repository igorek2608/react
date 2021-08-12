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
import Card from "./Card";

function Repos() {
  const [value, setValue] = useState("");
  const items = useSelector(selectReposItems);
  const loading = useSelector(selectReposLoading);
  const error = useSelector(selectReposError);
  const dispatch = useDispatch();
  console.log(items);
  useEffect(() => {
    dispatch(fetchRepos());
  }, []);

  const filteredRepos = items.filter((item) => {
    return item.name.toLowerCase().includes(value.toLocaleLowerCase());
  });

  return (
    <div className="repos">
      <h1>Список репозиториев</h1>
      {loading && <div>Loading...</div>}
      {error && <div>Error^(</div>}
      <div className="search-wrapper">
        <input
          className="search"
          type="name"
          placeholder="search"
          onChange={(event) => setValue(event.target.value)}
        ></input>
      </div>
      {filteredRepos
        .sort((a, b) => {
          if (b.stargazers_count > a.stargazers_count) return 1;
          else if (b.stargazers_count < a.stargazers_count) return -1;
          return 0;
        })
        .map((item) => (
          <Card
            name={item.name}
            key={item.id}
            stars={item.stargazers_count}
            commit={item.pushed_at}
            link={item.git_url}
          ></Card>
        ))}
    </div>
  );
}

export default Repos;
