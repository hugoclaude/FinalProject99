import React, { Component } from "react";

export default class Profile extends Component {
    render() {
        return (
            <div className="profile-container">

                <div className="card">

                    <div className="avatar-container">
                        <img
                            className="avatar"
                            src="http://via.placeholder.com/110x110"
                        />
                    </div>


                    <div className="card-body">
                        <div className="card-title">'Username'</div>
                        <div className="card-text">
                            Some quick example text to make up majority of
                            the card's contents
                        </div>
                        <div className="card-email">'User Email'</div>
                    </div>
                </div>
                

                <div className="profile-description">
                    <div className="card-text-center">
                        <div className="card-header">Profile page</div>
                        <div className="card-body">
                            <div className="card-title">
                                {" "}
                                Hey 'username' welcome back!
                            </div>
                            <div className="card-text">
                                This is your profile page where you can add all
                                the information about yourself
                            </div>
                            <div className="edit-button">
                                Click here to edit profile...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
