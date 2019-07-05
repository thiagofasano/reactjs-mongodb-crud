import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Project from './pages/Project';
import Home from './pages/Home';

function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/project" component={Project} />
        </Switch>
    );
}

export default Routes;