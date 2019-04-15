import React, {Component} from 'react';
import {Redirect} from 'react-router'
import connect from "react-redux/es/connect/connect";
import {userActions} from '../../_actions';

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                fullName: '',
                email: '',
                repeatPassword: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({submitted: true});
        const {user} = this.state;
        const {dispatch} = this.props;
        if (user.fullName && user.email && user.repeatPassword && user.password) {
            dispatch(userActions.register(user));
        }
    }

    render() {
        const {registering} = this.props;
        const {user, submitted} = this.state;

        if (registering) {
            return <Redirect to='/login'/>;
        }

        return (
            <form name="form" onSubmit={this.handleSubmit}>

                <input type="text" className="form-control" name="firstName" value={user.fullName}
                       onChange={this.handleChange}/>
                {submitted && !user.fullName &&
                <div className="help-block">First Name is required</div>
                }
                <input type="text" className="form-control" name="lastName" value={user.email}
                       onChange={this.handleChange}/>
                {submitted && !user.email &&
                <div className="help-block">Last Name is required</div>
                }

                <input type="password" className="form-control" name="password" value={user.password}
                       onChange={this.handleChange}/>
                {submitted && !user.password &&
                <div className="help-block">Password is required</div>
                }
                <input type="text" className="form-control" name="username" value={user.repeatPassword}
                       onChange={this.handleChange}/>
                {submitted && !user.repeatPassword &&
                <div className="help-block">Username is required</div>
                }
                <button type="submit" label="submit">
                    SignUp
                </button>

            </form>
        );
    }
}

function mapStateToProps(state) {
    const {registering} = state.registration;
    return {
        registering
    };
}

const connectedSignUp = connect(mapStateToProps)(SignUpForm);

export default connectedSignUp;

