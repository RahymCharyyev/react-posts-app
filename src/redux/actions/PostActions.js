import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const TOGGLE_COMMENTS = "TOGGLE_COMMENTS";

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_POSTS });

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message });
      });
  };
};

export const toggleComments = (postId) => {
  return { type: TOGGLE_COMMENTS, payload: postId };
};
