import React, { Component } from "react";
import Typer from '../transitions/Typer';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Sections from './Sections';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            placeholder: "Loading",
        };
    }
    
    componentDidMount() {
        this.setState(() => {
            return {
                loaded: false,
            };
        });
    }
    render() {
        return (
            <>
            <Jumbotron className="jimbo-jambo">
                <h1>
                    <Typer
                    startText="$"
                    dataText={[  
                        "jamie_hamilton_"
                    ]} 
                    />
                </h1>
                <code>&lt;des*/&gt;</code>&nbsp;&nbsp;//&nbsp;&nbsp;<code>&lt;3</code>&nbsp;&nbsp;//&nbsp;&nbsp;<code>.dev_()</code>
            </Jumbotron>
            <Sections />
            </>
        )
    }
}

export default Home;