import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

class ToProject extends React.Component {
    render() {
        return (
            <Row className="to-project">
                <Link className="feature-btn" as={Link} to="/projects" replace>
                <div className="fill"></div>
                <div className="btn-text">
                projects_<code>&gt;</code><span><i className="fas fa-laptop-code"></i></span>
                </div>
                </Link>
            </Row>
        )
    }
}

export default ToProject;