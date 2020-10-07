import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          offTop: false,
        };
    }
        
    // Adds an event listener when the component is mounted.
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    // Remove the event listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    // Hide or show the menu.
    handleScroll = () => {
        this.setState({
            offTop: document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100,
        });
    };
    render() {
        return (
            <Navbar className={this.state.offTop ? "offTop": "top"} sticky="top" variant="dark">
                <Navbar.Brand as={Link} to="/">
                <Container className="ml-0 mr-0">
                    <div style={{color: this.state.offTop && "black"}} className="sq-logo nav-logo">
                        <svg className="ratio" viewBox="0 0 1 1"></svg>
                        <code className="logo-text">j_h.</code>
                    </div>
                </Container>
                </Navbar.Brand>
                <Nav className="nav-icons justify-content-end my-auto">
                    <Nav.Link className="sq-link my-auto text-center" as={NavLink} exact to="/" replace>
                        <i className={`fas fa-home ${this.state.offTop ? "sq-icon-dark" : "sq-icon-light"}`}></i>
                        <p className="nav-text" style={this.state.offTop ? {opacity: 0} : {opacity: 1}}>home_</p>
                    </Nav.Link>
                    <Nav.Link className="sq-link my-auto text-center" as={NavLink} to="/projects" replace>
                        <i className={`fas fa-laptop-code ${this.state.offTop ? "sq-icon-dark" : "sq-icon-light"}`}></i>
                        <p className="nav-text" style={this.state.offTop ? {opacity: 0} : {opacity: 1}}>work_</p>
                    </Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Navigation;