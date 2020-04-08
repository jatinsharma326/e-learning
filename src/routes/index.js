import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Login from '../Authenticate/login';
import HomeTop from '../centerHome/hometop';

export default function Routes(){
    return (
        <Switch>
            <Route path = '/' exact component={HomeTop} />
            <Route path = '/login' component = {Login} />
            <Route Component={HomeTop} />
        </Switch>
    )
}