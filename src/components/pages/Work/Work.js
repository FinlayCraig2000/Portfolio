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
                        description="As doing some freelance work OneToOne Development
                        allowed me to help out with one of there projects. I would need
                        to create three AR applications using a website call 8th wall.
                        You are able to see this in the link below when you click on the
                        blue boxs with the star next to them."
                        link="https://onetoonedevelopment.org/walking-in-time/normangate-field/"
                    />
                </div>
            </div>
        );
    }
}