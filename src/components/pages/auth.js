import React, { Component } from 'react';

import Login from '../authentication/login';
//import loginImg from '../../../static/assets/images/auth/login.jpn';

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogin();
        this.props.history.push('/');
    }

    handleUnsuccessfulAuth() {
        this.props.handleSuccessfulLogin();
    }

    render() {
        return (
            <div className='auth-page-wrapper'>
                <div className='card-header'>Welcome to Navbar Industries</div>
                <div className='card-body'>
                    <Login
                        handleSuccessfulAuth={this.handleSuccessfulAuth}
                        handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
                    />
                </div>
            </div>
        );
    }
}