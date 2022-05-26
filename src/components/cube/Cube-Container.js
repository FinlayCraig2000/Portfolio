import React from "react";

import AboutContainer from "../pages/About/About.js";
import CvContainer from "../pages/Cv/Cv.js";
import ProjectsContainer from "../pages/Project/Project.js";
import SettingsContainer from "../pages/Settings/Settings.js";
import SkillsContainer from "../pages/Skills/Skills.js";
import { WorkContainer } from "../pages/Work/Work.js";

import "./Cube-Container.css"

export default class CubeContainer extends React.Component {
    render() {
        return(
            <div className="cube-container">
                <div className="cube show-front">
                    <div className="cube__face cube__face--front">
                        <div className="overflow-container">
                            <AboutContainer />
                        </div>
                    </div>

                    <div className="cube__face cube__face--back">
                        <div className="overflow-container">
                            <ProjectsContainer />
                        </div>
                    </div>

                    <div className="cube__face cube__face--right">
                        <div className="overflow-container">
                            <CvContainer />
                        </div>
                    </div>

                    <div className="cube__face cube__face--left">
                        <div className="overflow-container">
                            <SkillsContainer />
                        </div>
                    </div>

                    <div className="cube__face cube__face--top">
                        <div className="overflow-container">
                            <WorkContainer />
                        </div>
                    </div>

                    <div className="cube__face cube__face--bottom">
                        <div className="overflow-container">
                            <SettingsContainer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}