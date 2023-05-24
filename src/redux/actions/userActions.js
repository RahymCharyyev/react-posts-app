import axios from "axios";
import { API_URL } from "../../api";

export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const FETCH_USER_POSTS = "FETCH_USER_POSTS";
export const FETCH_USER_POSTS_SUCCESS = "FETCH_USER_POSTS_SUCCESS";
export const FETCH_USER_POSTS_FAILURE = "FETCH_USER_POSTS_FAILURE";

export const fetchUser = (userId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USER, payload: userId });

    try {
      const response = await axios.get(`${API_URL}/users/${userId}`);
      dispatch({ type: FETCH_USER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
    }
  };
};

export const fetchUserPosts = (userId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USER_POSTS, payload: userId });

    try {
      const response = await axios.get(`${API_URL}/posts?userId=${userId}`);
      dispatch({ type: FETCH_USER_POSTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_USER_POSTS_FAILURE, payload: error.message });
    }
  };
};
