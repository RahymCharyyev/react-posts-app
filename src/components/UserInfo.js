import React from "react";
import { Card } from "react-bootstrap";

const UserInfo = ({ user }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>Email: {user.email}</Card.Text>
        <Card.Text>Website: {user.website}</Card.Text>
        <Card.Text>Company: {user.company.name}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserInfo;
