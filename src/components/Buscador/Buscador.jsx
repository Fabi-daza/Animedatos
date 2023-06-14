import React from 'react'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Buscador = ({setSearch, setOrden}) => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-3 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
            <Nav.Link onClick={(e) => setOrden('OrdAZ')}> Ordenar por nombre A-Z</Nav.Link>
            <Nav.Link onClick={(e) => setOrden('OrdZA')}> Ordenar por nombre Z-A</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Buscador