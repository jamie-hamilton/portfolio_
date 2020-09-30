import React from 'react';


class ProjectList extends React.Component {
    render() {
        return (
            <div className={
                (this.props.loaded
                ? (!this.props.speed ? "fade-in" : `fade-in-${this.props.speed}`)
                : "pre-fade")
            }>
                {this.props.children}
            </div>
        );
    }
}

export default ProjectList;