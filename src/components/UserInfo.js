import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser } from "../redux/actions/userActions";
import { Card } from "react-bootstrap";
import Loader from "./Loader";

const UserInfo = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { user } = useSelector((state) => state.user);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setShowLoader(true);

    const delay = setTimeout(() => {
      dispatch(fetchUser(userId));
      setShowLoader(false);
    }, 500);

    return () => clearTimeout(delay);
  }, [dispatch, userId]);

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <div>
          {user && (
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>Username: {user.username}</Card.Text>
                <Card.Text>Email: {user.email}</Card.Text>
                <Card.Text>Phone: {user.phone}</Card.Text>
                <Card.Text>Website: {user.website}</Card.Text>
                {user.company && (
                  <Card.Text>Company: {user.company.name}</Card.Text>
                )}
              </Card.Body>
            </Card>
          )}
        </div>
      )}
    </>
  );
};

export default UserInfo;
