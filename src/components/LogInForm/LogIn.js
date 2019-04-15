import React, {Component} from 'react';
import style from './LogIn.module.css'
import {NavLink} from "react-router-dom";
import {Redirect} from 'react-router'
import connect from "react-redux/es/connect/connect";
import {userActions} from '../../_actions';

class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            repeatPassword: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({submitted: true});
        const {username, password} = this.state;
        const {dispatch} = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const {loggingIn} = this.props;
        const {username, password, submitted} = this.state;
        if (loggingIn) {
            return <Redirect to='/profile'/>;
        }
        return (

            <form className={style.wrapperForm}
                  name="form" onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control" name="username" value={username}
                           onChange={this.handleChange}/>
                    {submitted && !username &&
                    <div className="help-block">Username is required</div>
                    }
                    <input type="password" className="form-control" name="password" value={password}
                           onChange={this.handleChange}/>
                    {submitted && !password &&
                    <div className="help-block">Password is required</div>
                    }
                    <button type="submit" label="submit">
                        LogIn
                    </button>

                    <button type="submit" label="submit">
                        <NavLink to='/signUp'>SignUp</NavLink>
                    </button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    const {loggingIn} = state.authentication;
    return {
        loggingIn
    };
}

const connectedLogin = connect(mapStateToProps)(LogIn);
export default connectedLogin;

