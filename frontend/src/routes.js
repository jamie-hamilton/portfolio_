import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import ProjectList from './components/Projects/Projects';


const BaseRouter = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={ProjectList} />
    </Switch>
);

export default BaseRouter