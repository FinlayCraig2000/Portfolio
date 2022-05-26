import React from "react";

import "./common-container.css"

export class CommonContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        };
    }

    render() {
        return(
            <div className="common-container">
                <h1>{this.props.header}</h1>
                <div className="common-inner-text-container">
                    <p>{this.props.description}</p>
                </div>
                <a href={this.props.link} target="_blank">Click Here</a>
            </div>
        );
    }
}