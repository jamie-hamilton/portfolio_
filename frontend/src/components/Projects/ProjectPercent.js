import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

class ProjectPercent extends React.Component {
    render() {
        return (
            <div className="project-percent">
                <div className="progress">
                    {this.props.languageInfo.map(item => {
                        return (
                            <span key={item.language.id} style={{width: `${item.percent_used}%`}} className={`bg-${item.language.name.toLowerCase()}`}></span>
                        );
                    })}
                </div>
                <Row>
                    {this.props.languageInfo.map(item => {
                        if (item.percent_used > 0) {
                            return (
                                <Col key={item.language.id} className="text-center">
                                    <Badge pill className={`bg-${item.language.name.toLowerCase()}`}>{item.language.name}</Badge>
                                </Col>
                            );
                        }
                    })}
                </Row>
            </div>
        )
    }
}

export default ProjectPercent;