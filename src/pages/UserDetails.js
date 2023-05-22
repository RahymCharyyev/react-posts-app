import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserInfo from "../components/UserInfo";
import Post from "../components/Post";
import Loader from "../components/Loader";

const UserDetails = ({ match }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userPosts = useSelector((state) => state.userPosts);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchUser(match.params.userId));
    dispatch(fetchUserPosts(match.params.userId));
  }, [dispatch, match.params.userId]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <UserInfo user={user} />
          <h1>Посты пользователя</h1>
          {userPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </>
      )}
    </div>
  );
};

export default UserDetails;
