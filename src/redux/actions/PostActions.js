import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE";

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

export const fetchComments = (postId) => ({
  type: FETCH_COMMENTS,
  payload: postId,
});
