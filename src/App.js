import './App.css'
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from "./components/Profile/Profile";
import connect from "react-redux/es/connect/connect";
import LogIn from "./components/LogInForm/LogIn";
import SingUp from "./components/SignUpForm/SingUp";
import {PrivateRoute} from "./_components";

class App extends Component {


    render() {
        const {alert} = this.props;
        return (

            <div className="app-wrapper">
                <div>
                    {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                </div>

                <BrowserRouter >

                    <div className='app-wrapper-content'>
                        <PrivateRoute exact path='/' component={Profile}/>
                        <Route path='/signUp' component={SingUp}/>
                        <Route path='/login' component={LogIn}/>
                    </div>
                </BrowserRouter>

            </div>
        )
    }
}

function mapStateToProps(state) {
    const {alert} = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);

export default connectedApp;
