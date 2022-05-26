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
                        link="https://finlaycraig2000.github.io/visual-maths/home"
                    />
                </div>
            </div>
        );
    }
}