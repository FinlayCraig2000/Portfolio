import React from "react";
import AboutDescriptionContainer from "./About-Description";
import AboutProfileImageContainer from "./About-Profile-Image";
import AboutInformationContainer from "./About-Information";
import { LinkedIn } from "../../common/linkedin";
import { GitHub } from "../../common/github";
import "./About.css"

export default class AboutContainer extends React.Component {
    render() {
        return(
            <div className="about-container">
                <div className="about-header-container">
                    <header className="about-header">About</header>
                </div>

                <div className="about-flex">
                    <div className="about-me-container">
                        <AboutProfileImageContainer />
                        <AboutDescriptionContainer />
                        <div className="website-links-container">
                            <LinkedIn />
                            <GitHub />
                        </div>
                    </div>
                    <div className="about-information-container">
                        <AboutInformationContainer />
                    </div>
                </div>
            </div>
        );
    }
}