import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Task from '../views/Task';
import QrCode from '../views/QrCode';


const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/task" component={Task} />
                <Route path="/task/:id" component={Task} />
                <Route path="/qrcode" component={QrCode} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;