import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink to={route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>
            </div>
        );
    };

    const handleSignOut = () => {
        axios
            .delete("https://api.devcamp.space/logout", {
                withCredenatilas: true,
            })
            .then((response) => {
                if (response.status === 200) {
                    props.history.push("/");
                    props.handleSuccessfulLogout();
                }
                return response.data;
            })
            .catch((error) => {
                console.log("Error signing out", error);
            });
    };

    return (
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                    </NavLink>
                </div>

                {props.loggedInStatus === "NOT_LOGGED_IN"
                    ? dynamicLink("/signup", "Signup")
                    : null}

                {props.loggedInStatus === "LOGGED_IN"
                    ? dynamicLink("/shop", "Shop")
                    : null}

                {props.loggedInStatus === "LOGGED_IN"
                    ? dynamicLink("/checkout", "Checkout")
                    : null}

                {props.loggedInStatus === "LOGGED_IN"
                    ? dynamicLink("/profile", "Profile")
                    : null}
            </div>

            <div className="right-side">
                NAVBAR INDUSTRIES
                {props.loggedInStatus === "LOGGED_IN" ? (
                    <a onClick={handleSignOut}>
                        <FontAwesomeIcon icon="sign-out-alt" />
                    </a>
                ) : null}
            </div>
        </div>
    );
};

export default withRouter(NavigationComponent);
