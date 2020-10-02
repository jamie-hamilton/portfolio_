import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';


class Categories extends React.Component {
    render() {
        return (
            <Row>
            {this.props.categories.map(category => {
                return (
                    <Col className="stack-col" key={category.id} md={4}>
                        <Card style={{minHeight: "10rem"}} bg="dark" text="light" className="category-card text-center">
                            <Card.Body>
                                <Card.Header>
                                <Card.Title><code><i className={category.icon}></i></code></Card.Title>
                                <Card.Title>{category.name}</Card.Title>
                                <p><small>{category.summary}</small></p>
                                </Card.Header>
                                <Row className="category-row">
                                    {category.cat_subjects.map(subject => {
                                        return (
                                            <Col key={subject.id}>
                                                <Row>
                                                    <Col>
                                                    <i className={`${subject.logo_icon} card-icon`}></i>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                    <code className="text-white small">{subject.name}</code>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
            </Row>
        );
    }
}

export default Categories;