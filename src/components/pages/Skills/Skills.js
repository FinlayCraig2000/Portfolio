import React from "react";

import { LanguagesContainer } from "./languages";

import "./Skills.css"

const dateInterface = {
    startDate: 0,
    endDate:1
}

export default class SkillsContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            languages: {
                javascript: [new Date(), new Date()],
                cplusplus: [new Date(2016,0,1), new Date()],
                python: [new Date(2018,0,1), new Date()],
                java: [new Date(), new Date()],
                htmlandcss: [new Date(), new Date()],
                php: [new Date(2020,7,8), new Date(2020,12,12)],
            }
        }
    }

    render() {
        return(
            <div className="skills-container">
                <header className="skills-header">Skills</header>
                <div className="programming-display-container">
                    <LanguagesContainer
                        text={"Javascript"}
                        date={this.state.languages.javascript[dateInterface.startDate]}
                    />

                    <LanguagesContainer
                        text={"C++"}
                        date={this.state.languages.cplusplus[dateInterface.startDate]}
                    />

                    <LanguagesContainer
                        text={"Python"}
                        date={this.state.languages.python[dateInterface.startDate]}
                    />

                    <LanguagesContainer
                        text={"Java"}
                        date={this.state.languages.java[dateInterface.startDate]}
                    />
                    
                    <LanguagesContainer
                        text={"HTML and CSS"}
                        date={this.state.languages.htmlandcss[dateInterface.startDate]}
                    />
                    
                    <LanguagesContainer
                        text={"PHP"}
                        date={this.state.languages.php[dateInterface.startDate]}
                    />
                </div>
            </div>
        );
    }
}