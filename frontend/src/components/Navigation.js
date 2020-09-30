import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

class Navigation extends React.Component {
    render() {
        return (
            <Navbar variant="dark" bg="dark">
                <Navbar.Brand as={Link} to="/">
                <Container className="ml-0 mr-0">
                    <div className="sq-logo nav-logo">
                        <svg className="ratio" viewBox="0 0 1 1"></svg>
                        <code className="logo-text">j_h.</code>
                    </div>
                </Container>
                </Navbar.Brand>
                <Nav className="nav-icons justify-content-end">
                    <Nav.Link className="sq-link my-auto" as={NavLink} to="/" exact>
                        <i className="fas fa-home sq-icon-light"></i>
                    </Nav.Link>
                    <Nav.Link className="sq-link my-auto" as={NavLink} to="/projects">
                        <i className="fas fa-laptop-code sq-icon-light"></i>
                    </Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Navigation;