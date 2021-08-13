import {
  FETCH_REPOS_LOADING,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_ERROR,
  FETCH_CURRENT_PAGE,
} from "./constans";
import { handleActions } from "redux-actions";

const intialState = {
  items: [],
  loading: false,
  error: null,
  currentPage:1,
  perPage:10,
  totalCount:0,
};

const reposReducer = handleActions(
  {
    [FETCH_REPOS_LOADING]: (state, action) => {
      return { ...state, loading: true };
    },
    [FETCH_REPOS_SUCCESS]: (state, action) => {
      return { ...state, items: action.payload.items, loading: false,totalCount:action.payload.total_count  };
    },
    [FETCH_REPOS_ERROR]: (state, action) => {
      return { ...state, loading: false, error: action.payload.error };
    },
    [FETCH_CURRENT_PAGE]: (state, action) => {
      return { ...state, loading: false, currentPage: action.payload.currentPage };
    },
  },
  intialState
);

export default reposReducer;