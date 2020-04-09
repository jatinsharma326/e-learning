import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Login from '../Authenticate/login';
import HomeTop from '../centerHome/hometop';
import Register from '../Authenticate/register';

export default function Routes(){
    return (
        <Switch>
            <Route path = '/' exact component={HomeTop} />
            <Route path = '/login' component = {Login} />
            <Route path = '/register' component = {Register} />
            <Route Component={HomeTop} />
        </Switch>
    )
}