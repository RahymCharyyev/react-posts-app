import React from "react";
import PostList from "../components/PostList";

const Home = () => {
  return (
    <div>
      <h1 className="text-center">Список постов</h1>
      <PostList />
    </div>
  );
};

export default Home;
