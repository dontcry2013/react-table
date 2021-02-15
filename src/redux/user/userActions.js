import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from "./userTypes";

export const fetchUsers = (uri) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    return axios
      .get(`${uri}/users`)
      .then((response) => {
        // response.data is the users
        const users = response.data;
        setTimeout(() => {
          dispatch(fetchUsersSuccess(users));
        }, 3000);
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  };
};
