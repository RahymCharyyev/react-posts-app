import axios from "axios";
import { API_URL } from "../../api";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE";

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_POSTS });

    try {
      const response = await axios.get(`${API_URL}/posts`);
      dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message });
    }
  };
};

export const fetchComments = (postId) => ({
  type: FETCH_COMMENTS,
  payload: postId,
});
