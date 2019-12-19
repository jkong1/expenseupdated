import React, {Component} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import LandingPage from './LandingPage';
import Error from './error';
import Login from './login';
import Signup from './signup';
import Home from './home';
import Input from './input'
import auth from './auth';

class ConnectRoute extends Component {
    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/home' component={auth(Home)} />
                <Route path='/input' component={Input} />
                <Route component={Error} />
            </Switch>
           </BrowserRouter> 
        )

    }
}
export default ConnectRoute;