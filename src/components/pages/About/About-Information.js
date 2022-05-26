import React from "react";
import "./About-Information.css"

export default class AboutInformationContainer extends React.Component {
    render() {
        return(
            <div className="about-info-container">
                <h3>
                    Introduction
                </h3>
                <p>
                    I'm a recent computer science graduate whos main focus is on
                    front-end web development. I'm currently learning React framework
                    and having a deep understanding of the ins and outs of it.
                </p>
                <br />
                <p>
                    I'm wanting to focus on Javascript and React but would like to
                    have knowledge about Typescript and some other frameworks at a
                    later date in time.
                </p>
                <br />
                <p>
                    I've had experience in other languages such as Python, C++, Java
                    and SQL, my knowledge is basic with these languages.
                </p>
            </div>
        );
    }
}