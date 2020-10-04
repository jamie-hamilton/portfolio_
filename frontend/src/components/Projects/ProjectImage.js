import React from 'react';
import Image from 'react-bootstrap/Image';

class  ProjectImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgReady: false,
            imgClass: "pre-fade project-image"
        };
        this.handleLoad = this.handleLoad.bind(this)
    }
    
    handleLoad() {
        this.setState(() => {
            return {
                imgReady: true,
                imgClass: "fade-in-fast project-image" 
            };
        });
    }
    render() {
        return (
            <div className="img-container mx-auto">
                <div className="img-overlay"></div>
                <code className="large img-overlay-title">{this.props.title}</code>
                <Image 
                    className="project-image" 
                    src={this.props.placeholder} 
                    style={{display: this.state.imgReady ? "none" : "block"}}
                    fluid 
                />
                <Image 
                    className={this.state.imgClass}
                    src={this.props.image} 
                    style={{display: this.state.imgReady ? "block" : "none"}}
                    onLoad={this.handleLoad}
                    fluid 
                />
            </div>

        )
    }
}

export default ProjectImage;