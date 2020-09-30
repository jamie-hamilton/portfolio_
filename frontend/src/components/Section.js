import React from 'react';
import Categories from './Categories';

class Section extends React.Component {
    render() {
        return (
            <div className="section">
            <h3>{this.props.section.title}</h3>
            <p>{this.props.section.summary}</p>
            <Categories categories={this.props.section.categories} />
            </div>
        )
    }
}

export default Section;