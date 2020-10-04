import React from 'react';
import Categories from './Categories';
import Intro from './Intro';

class Section extends React.Component {
    render() {
        return (
            <div className="section">
            <Intro id={this.props.section.id} title={this.props.section.title} summary={this.props.section.summary}/>
            <Categories categories={this.props.section.categories} />
            </div>
        )
    }
}

export default Section;