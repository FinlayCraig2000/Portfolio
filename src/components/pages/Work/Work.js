import React from "react";

import { CommonContainer } from "../../common/common-container";

import "./Work.css"

export class WorkContainer extends React.Component {
    render() {
        return(
            <div className="work-container">
                <header className="work-header">Work</header>

                <div className="work-boxes-container">
                    <CommonContainer 
                        header="Roman AR"
                        description="TODO add description about the work which was a contract.
                        OneToOne Development allowed me to help out with there project"
                        link="https://onetoonedev.8thwall.app/roman-army"
                    />
                </div>
            </div>
        );
    }
}