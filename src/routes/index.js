import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Task from '../views/Task';


const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/task" component={Task} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;