import React from "react";
import "./About-Profile-Image.css"

export default class AboutProfileImageContainer extends React.Component {
    render() {
        return(
            <div className="about-profile-container">
                <img className="about-profile-image" src={process.env.PUBLIC_URL + '/images/placeholder.png'} alt="Finlay Craig - Profile"></img>
            </div>
        );
    }
}