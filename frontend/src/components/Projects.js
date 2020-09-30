import React from 'react';
import Project from './Project';
import Loader from 'react-loader-spinner';
import ResponseError from './ResponseError';
import Fadein from '../transitions/Fadein'
import { Jumbotron } from 'react-bootstrap';
import Typer from '../transitions/Typer';
import Contact from './Contact';


class ProjectList extends React.Component {
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
        fetch("api/projects")
            .then(response => {
            if (response.status > 400) {
                return this.setState(() => {
                    return { placeholder: <ResponseError /> };
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
        <Jumbotron className="jimbo-jambo">
            <h1>
                <Typer
                startText="$"
                dataText={[  
                    "projects_"
                ]} 
                />
            </h1>
            <code>some things that I have made:</code>
            </Jumbotron>
            {!this.state.loaded ?
                <div className="mt-5 text-center h-100">
                    {this.state.placeholder}
                </div>
                :
            <Fadein loaded={this.state.loaded}>
                {this.state.data.map(project => {
                    return (
                        <Project key={project.id} project={project}/>
                    );
                })}
                <Contact />
            </Fadein>
            }
        </>
        );
    }
}

export default ProjectList;