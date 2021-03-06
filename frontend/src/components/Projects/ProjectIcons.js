import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ProjectIcons extends React.Component {
    render() {
        return (
            <div className="project-icons">
                <Row>
                    {this.props.languageInfo.map(item => {
                        return (
                            <Col className="text-center" key={item.language.id}>
                                <i className={`${item.language.logo_icon} card-icon`} />
                            </Col>
                        );
                    })}
                </Row>
            </div>
        )
    }
}

export default ProjectIcons