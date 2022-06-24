import React from "react";
import "./Cv.css"

// TODO split images so component opens image on the same page instead of hyperlink.

export default class CvContainer extends React.Component {
    render() {
        return(
            <div className="cv-container">
                <header className="cv-header">CV Information</header>
                <p>Below is my CV </p>
                <div className="cv-image-container">
                    <a href={process.env.PUBLIC_URL + '/images/CV-Page-One.jpg'} target="_blank" rel="noreferrer">
                        <img className="cv-image" src={process.env.PUBLIC_URL + '/images/CV-Page-One.png'} alt="CV Page One"></img>
                    </a>

                    <a href={process.env.PUBLIC_URL + '/images/CV-Page-Two.jpg'} target="_blank" rel="noreferrer">
                        <img className="cv-image" src={process.env.PUBLIC_URL + '/images/CV-Page-Two.png'} alt="CV Page One"></img>
                    </a>
                </div>
            </div>
        );
    }
}