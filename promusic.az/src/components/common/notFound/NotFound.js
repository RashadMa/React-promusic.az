import React from "react";
import { Container } from "react-bootstrap";
import "./notFound.scss";

function NotFound() {
  return (
    <Container>
      <div className="not-found d-flex align-items-center justify-content-center flex-column">
        <h1 className="mb-5">404 Not found</h1>

        <h3>We can't fint anything about your search</h3>
      </div>
    </Container>
  );
}

export default NotFound;
