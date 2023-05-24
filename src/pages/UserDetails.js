import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserInfo from "../components/UserInfo";
import Post from "../components/Post";
import Loader from "../components/Loader";
import { fetchUser, fetchUserPosts } from "../redux/actions/userActions";

const UserDetails = ({ match }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userPosts = useSelector((state) => state.userPosts);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    if (match && match.params && match.params.userId) {
      const userId = match.params.userId;
      dispatch(fetchUser(userId));
      dispatch(fetchUserPosts(userId));
    }
  }, [dispatch, match]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <UserInfo user={user} />
          <h1>Посты пользователя</h1>
          {userPosts && userPosts.length > 0 ? (
            userPosts.map((post) => <Post key={post.id} post={post} />)
          ) : (
            <p>No posts found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default UserDetails;
