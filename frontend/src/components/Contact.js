import React from 'react';
import { Jumbotron, Row, Col } from 'react-bootstrap';

class Contact extends React.Component {
    render() {
        return (
            <>
            <Jumbotron className="jimbo-low-jambo text-center">
                <Row className="justify-content-center">
                    <h2 className="heading-alt">I am easy to find:</h2>
                </Row>
                <Row className="justify-content-center">
                <a href="mailto:jhamilton.contact@gmail.com" target="_blank" className="sq-link">
                    <Col><i className="sq-icon-dark large fas fa-at"></i></Col>
                </a>
                <a href="https://github.com/jimthethief" target="_blank" className="sq-link">
                    <Col><i className="sq-icon-dark large fab fa-github"></i></Col>
                </a>
                <a href="https://twitter.com/wambamjamham" target="_blank" className="sq-link">
                    <Col><i className="sq-icon-dark large fab fa-twitter"></i></Col>
                </a>
                </Row>
            </Jumbotron>
            <div className="page-bottom" />
            </>
        )
    }
}

export default Contact;