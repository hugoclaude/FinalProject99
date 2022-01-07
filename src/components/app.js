import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import NavigationContainer from "./navigation/navigation-container";

import Auth from "./pages/auth";
import SignUp from "./pages/signup";
import Shop from "./shop/shop";
import Checkout from "./checkout/checkout";
// import ThankYou from './pages/thankyou';
import Profile from './pages/profile';
import Icons from "../helpers/icons";

export default class App extends Component {
    constructor(props) {
        super(props);

        Icons();

        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
        };

        this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
        this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
        this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
    }

    handleSuccessfulLogin() {
        this.setState({
            loggedInStatus: "LOGGED_IN",
        });
    }

    handleUnsuccessfulLogin() {
        this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
        });
    }

    handleSuccessfulLogout() {
        this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
        });
    }

    checkLoginStatus() {
        return (
            axios
                // use user.js from './actions/users' for the get statement
                // http://localhost/phpmyadmin/index.php?route=/sql&server=1&db=nodejs-login&table=users&pos=0
                //https://api.devcamp.space/logged_in
                .get("https://api.devcamp.space/logged_in", {
                    withCredentials: true,
                })
                .then((response) => {
                    const loggedIn = response.data.logged_in;
                    const loggedInStatus = this.state.loggedInStatus;

                    if (loggedIn && loggedInStatus === "LOGGED_IN") {
                        return loggedIn;
                    } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
                        this.setState({
                            loggedInStatus: "LOGGED_IN",
                        });
                    } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
                        this.setState({
                            loggedInStatus: "NOT_LOGGED_IN",
                        });
                    }
                })
                .catch((error) => {
                    console.log("Error", error);
                })
        );
    }

    componentDidMount() {
        this.checkLoginStatus();
    }

    authorizedPages() {
        return [
            <Route key="shop" path="./pages/shop" component={Shop} />,
            <Route
                key="checkout"
                path="./pages/checkout"
                component={Checkout}
            />,
            //           <Route
            //             key="thank-you"
            //             path="./pages/thank-you"
            //             component={ThankYou}
            //           />,
            <Route
            key="profile"
            path="./pages/profile"
            component={Profile}
            />,
        ];
    }

    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <NavigationContainer
                            loggedInStatus={this.state.loggedInStatus}
                            handleSuccessfulLogout={this.handleSuccessfulLogout}
                        />

                        {/* <h2>{this.state.loggedInStatus}</h2> */}

                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={(props) => (
                                    <Auth
                                        {...props}
                                        handleSuccessfulLogin={
                                            this.handleSuccessfulLogin
                                        }
                                        handleUnsuccessfulLogin={
                                            this.handleUnsuccessfulLogin
                                        }
                                    />
                                )}
                            />

                            <Route path="/signup" exact component={SignUp} />

                            {/* {this.state.loggedInStatus === 'LOGGED_IN'
                        ? this.authorizedPages()
                        :null} */}

                            <Route
                                path="/shop"
                                render={(props) => (
                                    <Shop
                                        {...props}
                                        loggedInStatus={
                                            this.state.loggedInStatus
                                        }
                                    />
                                )}
                            />
                            <Route
                                path="/checkout"
                                render={(props) => (
                                    <Checkout
                                        {...props}
                                        loggedInStatus={
                                            this.state.loggedInStatus
                                        }
                                    />
                                )}
                            />
                            {/* <Route
                        path='/thankyou'
                        render={(props) => (
                            <ThankYou {...props} loggedInStatus={this.state.loggedInStatus} />
                        )}
                    /> */}
                            <Route
                                path='/profile'
                                render={(props) => (
                                    <Profile {...props} loggedInStatus={this.state.loggedInStatus} />
                                )}
                            />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}
