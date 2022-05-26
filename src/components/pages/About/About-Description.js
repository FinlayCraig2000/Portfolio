import React from "react";
import "./About-Description.css"

export default class AboutDescriptionContainer extends React.Component {
    render() {
        return(
            <div className="about-description-container">
                <p>
                    Hello my name is Finlay Craig
                </p>
                <br />
                <p>
                    This website is my portfolio which contains information
                    about me. You can navigate the website at the top of the
                    website. The settings menus is more of a way to mess around
                    with the website, changing the values of certain parts.
                </p>
                <br />
                <p>
                    Below are links to both my LinkedIn and GitHub. You'll be able to find the code of this website.
                </p>
                <br />
                <p>
                    If you want to contact me if you can email me at <a href="mailto:finlay.craig2000@gmail.com">finlay.craig2000@gmail.com</a>
                </p>
            </div>
        );
    }
}