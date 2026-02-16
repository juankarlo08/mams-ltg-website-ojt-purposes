import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const ErrorSection = () => {
  return (
    <main className="d-flex align-items-center justify-content-center vh-100 bg-white px-4 py-5">
    <Container className="text-center">
      <p className="text-danger fw-semibold">404</p>
      <h1 className="mt-3 display-4 fw-semibold text-dark">
        Page not found
      </h1>
      <p className="mt-4 fs-5 text-secondary">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-5 d-flex justify-content-center gap-3">
        <Button variant="danger" as={Link} to="/">
          Go back home
        </Button>
      </div>
    </Container>
  </main>
  )
}

export default ErrorSection