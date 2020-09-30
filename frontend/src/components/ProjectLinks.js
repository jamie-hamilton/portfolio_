import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class ProjectLinks extends React.Component {
    render() {
        return (
            <Row className="project-links mt-4">
            {this.props.links.map(link => {
                return (
                    <Col key={link.id}>
                        <Row className="justify-content-center small">
                        <a href={link.url} target="_blank" className="sq-link">
                            <i className={`sq-icon-dark ${link.icon}`} />
                        </a>
                        </Row>
                        <Row className="justify-content-center small">
                            <code className="font-dark">{link.to}</code>
                        </Row>
                    </Col>
                );
            })}
            </Row>
        );
    }
}

export default ProjectLinks;