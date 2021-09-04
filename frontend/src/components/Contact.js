import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Contact extends React.Component {
    render() {
        return (
            <>
            <Jumbotron className="jimbo-low-jambo text-center">
                <Row className="justify-content-center">
                    <h2 className="heading-alt">I am easy to find:</h2>
                </Row>
                <Row className="justify-content-center">
                <a href="mailto:hi@jamiehamilton.dev" target="_blank" className="sq-link mb-2">
                    <div className="mx-2 mx-sm-4"><i className="sq-icon-dark large fas fa-at"></i></div>
                </a>
                <a href="https://github.com/jamie-hamilton" target="_blank" className="sq-link mb-2">
                    <div className="mx-2 mx-sm-4"><i className="sq-icon-dark large fab fa-github"></i></div>
                </a>
                <a href="https://www.linkedin.com/in/jamie-hamilton-6ba907144/" target="_blank" className="sq-link mb-2">
                    <div className="mx-2 mx-sm-4"><i className="sq-icon-dark large fab fa-linkedin"></i></div>
                </a>
                <a href="https://twitter.com/wambamjamham" target="_blank" className="sq-link mb-2">
                    <div className="mx-2 mx-sm-4"><i className="sq-icon-dark large fab fa-twitter"></i></div>
                </a>
                </Row>
            </Jumbotron>
            <div className="page-bottom" />
            </>
        )
    }
}

export default Contact;