import React from "react";
import UserInfo from "../components/UserInfo";
import UserPostList from "../components/UserPostList";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserDetails = () => {
  return (
    <>
      <UserInfo />
      <UserPostList />
      <div className="text-center mt-20">
        <Link to={`/`}>
          <Button variant="primary">Назад</Button>
        </Link>
      </div>
    </>
  );
};

export default UserDetails;
