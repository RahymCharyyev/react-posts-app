import React, { useState } from "react";
import { Button, Card, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleComments = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <div className="d-flex align-items-center">
          <Button
            variant="link"
            onClick={toggleComments}
            aria-expanded={isOpen}
            aria-controls={`comments${post.id}`}
          ></Button>
          <Link to={`/user/${post.userId}`}>
            <img
              src="avatar.jpg"
              alt="Avatar"
              width={30}
              height={30}
              className="ml-auto"
            />
          </Link>
        </div>
        <Collapse in={isOpen}>
          <div id={`comments-${post.id}`} className="mt-3">
            {/* Render comments */}
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

export default Post;
