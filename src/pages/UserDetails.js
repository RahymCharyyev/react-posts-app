import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserInfo from "../components/UserInfo";
import Post from "../components/Post";

const UserDetails = ({ match }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const posts = useSelector((state) => state.userProps);

  useEffect(() => {});
  return (
    <div>
      <UserInfo user={user} />
      <h1>Посты пользователя</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default UserDetails;
