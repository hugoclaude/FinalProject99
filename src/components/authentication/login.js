import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import authorize from "../../../controllers/auth";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errorText: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        <authorize />;
        // axios
        //     .post(
        //         'https://api.devcamp.space/sessions',
        //         {
        //             client: {
        //                 email:this.state.email,
        //                 password: this.state.password,
        //             },
        //         },
        //         { withCredentials: false }
        //     )
        //     .then((response) => {
        //         if (response.data.status === 'created') {
        //             console.log('You can come in...');
        //             console.log('testing testing');
        //             this.props.handleSuccessfulAuth();
        //         }
        //     })
        //     .catch((error) => {
        //         this.setState({
        //             errorText: 'An error occured',
        //         });
        //         this.props.handleUnsuccessfulAuth();
        //     });

        // event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1 className="login-header">
                    Please log in to access the estore
                </h1>

                <form
                    onSubmit={this.handleSubmit}
                    className="auth-form-wrapper"
                >
                    <div className="form-group">
                        <FontAwesomeIcon icon="envelope" />
                        <input
                            className="auth-form-wrapper__email"
                            type="email"
                            name="email"
                            plcaeholder="Your Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />

                        <FontAwesomeIcon icon="lock" />
                        <input
                            className="auth-form-wrapper__password"
                            type="password"
                            name="password"
                            plcaeholder="Your password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />

                        <button className="btn" type="submit">
                            Login
                        </button>

                        <div className="errorText">{this.state.errorText}</div>
                    </div>
                </form>
            </div>
        );
    }
}