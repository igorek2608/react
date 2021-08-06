import {
  FETCH_USERS_LOADING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from "./constans";
import { handleActions } from "redux-actions";

const intialState = {
  items: [],
  loading: false,
  error: null,
};

const usersReducer = handleActions(
  {
    [FETCH_USERS_LOADING]: (state, action) => {
      return { ...state, loading: true };
    },
    [FETCH_USERS_SUCCESS]: (state, action) => {
      return { ...state, items: action.payload.items, loading: false };
    },
    [FETCH_USERS_ERROR]: (state, action) => {
      return { ...state, loading: false, error: action.payload.error };
    },
  },
  intialState
);

export default usersReducer;