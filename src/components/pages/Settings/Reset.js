
import React from "react";

import "./Reset.css"

export class ResetComponent extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {        
        return (
            <div className="reset-button-container">
                <button className="reset-button" onClick={this.props.onClick}>Reset</button>
            </div>
        );
    }

}