import axios from "axios";
import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from './postTypes';

export const fetchPosts = (userId) => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          userId
        }
      })
      .then((response) => {
        const posts = response.data;
        dispatch(fetchPostsSuccess(posts));
      })
      .catch((error) => {
        dispatch(fetchPostsFailure(error.message));
      });
  };
};

export const fetchPostsRequest = () => {
  return {
    type: FETCH_POST_REQUEST
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: posts
  };
};

export const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error
  };
};
