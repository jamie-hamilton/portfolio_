import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

class Foot extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: true
        };
    }
        
    // Adds an event listener when the component is mounted.
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.blink();
    }

    // Remove the event listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    // Hide or show the menu.
    handleScroll = () => {
        const { prevScrollpos } = this.state;
        const currentScrollPos = window.pageYOffset;

        // Visible to true if user scrolls down or has reached bottom of window
        const visible = prevScrollpos > currentScrollPos || (window.innerHeight + window.scrollY) >= document.body.offsetHeight;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    // Footer blinker
    blink = () => {
        const blink = document.querySelector(".blink")
        setInterval(function() {
            blink.style.visibility = (blink.style.visibility == 'hidden' ? '' : 'hidden');
        }, 500);
    };

    render() {
        return (
            <>
            <div className={
                    (this.state.visible
                    ? "fixed-bottom"
                    : "fixed-bottom slide-down")
                }
            >
                <Navbar variant="dark">
                    <Navbar.Brand>
                    <Container className="foot-copy w-25 ml-0 mr-0">
                        <code>jamie_hamilton_2020<span className="blink">|</span></code>
                    </Container>
                    </Navbar.Brand>
                    <Nav className="nav-icons justify-content-end">
                        <a href="https://github.com/jimthethief" target="_blank" className="sq-link my-auto nav-link">
                            <i className="fab fa-github sq-icon-light"></i>
                        </a>
                        <a href="mailto:hi@jamiehamilton.dev" target="_blank" className="sq-link my-auto nav-link">
                            <i className="fas fa-at sq-icon-light"></i>
                        </a>
                    </Nav>
                </Navbar>
            </div>
            </>
        );
    }
}

export default Foot;