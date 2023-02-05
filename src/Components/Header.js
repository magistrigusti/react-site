import React, { Component } from 'react';
import { Router, Switch, Route} from 'react-router-dom';
import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap';
import logo from './logo.svg';

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                  src={logo}
                  height="30"
                  width="30"
                  className="d-inline-block align-top"
                  alt="Logo"
              /> React site
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/about"> About Us</Nav.Link>
                <Nav.Link href="/contacts"> Contacts </Nav.Link>
                <Nav.Link href="/blog"> Blog </Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <Form inline>
                <FormControl 
                    type="text"
                    plaseholder="Search"
                    className="mr-sm-2"
                />
            </Form>

            <Button variant="outline-info">Search</Button>
          </Container>
        </Navbar>

        <Router>
          <Switch>
            <Route />
          </Switch>
        </Router>
      </>
    )
  }
}