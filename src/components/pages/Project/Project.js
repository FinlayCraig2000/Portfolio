import React from "react";

import { CommonContainer } from "../../common/common-container";

import "./Project.css"

export default class ProjectsContainer extends React.Component {
    render() {
        return(
            <div className="projects-container">
                <header className="projects-header">Projects Page</header>

                <div className="projects-boxes-container">
                    <CommonContainer 
                        header="Visual Maths"
                        description="A small project about giving a better understanding
                        of maths, being more visual to the user."
                        link="https://finlaycraig2000.github.io/visual-maths/"
                    />

                    <CommonContainer 
                        header="Medical Prescriptions - AAD"
                        description="For a group project with a team of 6, in which we would create a
                        website which would record what medical prescriptions the user needs when logged in.
                        This helped me understand more about PHP language but my main task was the front-end
                        of the website doing all of the work."
                        link="https://github.com/FinlayCraig2000/Advanced-Analysis-and-Design-Website"
                    />

                    <CommonContainer 
                        header="On-line learning game"
                        description="As part of my final year project I created a website
                        to help students learn online based on questions set by the teachers.
                        I learned more about javascript and SQL with this project."
                        link="https://github.com/FinlayCraig2000/On-line-learning-game"
                    />
                </div>
            </div>
        );
    }
}