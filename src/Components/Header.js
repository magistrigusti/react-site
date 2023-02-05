import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap';
import Home from './../Pages/Home.js';
import About from './../Pages/About.js';
import Contacts from './../Pages/Contacts';
import Blog from './../Pages/Blog';
import logo from './logo.svg';

export default class Header extends Component {
  render() {
    return(
      <div>
        <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img 
              src={logo}
              height="30"
              width="30"
              className="d-inline-block alogn-top"
              alt="logo"
            /> Magistrigusti site
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/"> Home </Nav.Link>
              <Nav.Link href="/about"> About Us </Nav.Link>
              <Nav.Link href="/contacts"> Contacts </Nav.Link>
              <Nav.Link href="/blog"> Blog </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Form>
            <FormControl 
                type="text"
                placeholder="Search"
                className="mr-sm-2"
            />
          </Form>

          <Button variant="outline-info">Search</Button>
        </Container>
        </Navbar>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Router>
      </div>
    )
  }
}