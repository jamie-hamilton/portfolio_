import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class Intro extends React.Component {
    render() {
        return (
            <Row>
            <Container className="category-intro" fluid>
                <h3 className="text-center">
                {this.props.id % 2 == 0 
                ? <><code>&lt;&nbsp;</code>{this.props.title}<code>&nbsp;/&gt;</code></>
                : <><code>&#123;&#123;&nbsp;</code>{this.props.title}<code>&nbsp;&#125;&#125;</code></>
                }
                </h3>
                <p>{this.props.summary}</p>
            </Container>
            </Row>
        )
    }
}

export default Intro;