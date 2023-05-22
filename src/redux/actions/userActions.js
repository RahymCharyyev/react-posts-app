import axios from "axios";

export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_POSTS = "FETCH_USER_POSTS";

export const fetchUser = (userId) => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER });

    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        dispatch({ type: FETCH_USER_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
      });
  };
};
