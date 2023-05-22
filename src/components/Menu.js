import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Nav className="flex-column">
      <Nav.Link as={Link} to="/">
        Список постов
      </Nav.Link>
      <Nav.Link as={Link} to="/about">
        Обо мне
      </Nav.Link>
    </Nav>
  );
};

export default Menu;
