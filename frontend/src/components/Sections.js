import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Loader from 'react-loader-spinner';
import ResponseError from './ResponseError';
import Fadein from '../transitions/Fadein';
import Section from './Section';
import Contact from './Contact';


class Sections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: ""
        };
    }
    
    componentDidMount() {
        var delayLoader = setTimeout(() => {
            this.setState(() => {
                return {
                    placeholder: <Loader className="fade-in" type="Watch" color="#e83e8c" height={80} width={80} />
                };
            });
        }, 1000)
        fetch("api/sections")
            .then(response => {
            if (response.status > 400) {
                return this.setState(() => {
                    return { 
                        placeholder: <ResponseError /> 
                    };
                });
            }
            return response.json();
            })
            .then(data => {
            this.setState(() => {
                return {
                    data,
                    loaded: true
                };
            });
        });
    }

    componentWillUnMount () {
        clearTimeout(delayLoader)
    }

    render() {
        return (
            <>
            {!this.state.loaded ?
                <div className="mt-5 text-center h-100">
                    {this.state.placeholder}
                </div>
                :
            <Fadein loaded={this.state.loaded} speed="slow">
                <Jumbotron className="jimbo-sub-jambo">
                {this.state.data.map(section => {
                    return (
                        <Section key={section.id} section={section}/>
                    );
                })}
                </Jumbotron>
                <Contact />
            </Fadein>
            }
            </>
            
        )
    }
}

export default Sections;