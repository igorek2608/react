import {
  FETCH_REPOS_LOADING,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_ERROR,
} from "./constans";
import { createActions } from "redux-actions";
import { getRepos } from "../../api";


export const { fetchReposLoading, fetchReposSuccess, fetchReposError } =
  createActions({
    [FETCH_REPOS_LOADING]: (loading) => ({ loading }),
    [FETCH_REPOS_SUCCESS]: (items) => ({ items }),
    [FETCH_REPOS_ERROR]: (error) => ({ error }),
  });

export const fetchRepos = () => async (dispatch) => {
  try {
    dispatch(fetchReposLoading());
    let data = await getRepos();

    console.log(data)
    dispatch(fetchReposSuccess(data));
  } catch (error) {
    dispatch(fetchReposError({ error }));
  }
};
