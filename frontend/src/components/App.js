import React, { Component } from "react";
import { HashRouter as Router } from 'react-router-dom';
import Layout from '../containers/Layout';
import BaseRouter from "../routes";

class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <BaseRouter />
                </Layout>
            </Router>
        )
    } 
}

export default App;