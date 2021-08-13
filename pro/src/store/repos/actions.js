import {
  FETCH_REPOS_LOADING,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_ERROR,
  FETCH_CURRENT_PAGE
} from "./constans";
import { createActions } from "redux-actions";
import { getRepos, getReposPage } from "../../api";


export const { fetchReposLoading, fetchReposSuccess, fetchReposError, fetchCurrentPage } =
  createActions({
    [FETCH_REPOS_LOADING]: (loading) => ({ loading }),
    [FETCH_REPOS_SUCCESS]: (items) => ({ items,}),
    [FETCH_REPOS_ERROR]: (error) => ({ error }),
    [FETCH_CURRENT_PAGE]: (page) => ({ page }),
  });

export const fetchRepos = (currentPage, perPage) => async (dispatch) => {
  try {
    dispatch(fetchReposLoading());
    let data = await getReposPage(currentPage,perPage);

    console.log(data)
    dispatch(fetchReposSuccess(data));
  } catch (error) {
    dispatch(fetchReposError({ error }));
  }
};


/* export const fetchReposPage = (currentPage, perPage) => async (dispatch) => {
  try {
    dispatch(fetchReposLoading());
    let data = await getReposPage(currentPage,perPage);

    
    dispatch(fetchReposSuccess(data));
  } catch (error) {
    dispatch(fetchReposError({ error }));
  }
}; */