import React from "react";

import "./span.css"


export class CommonSpan extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <span className={this.props.className} style={{width: this.props.style}}>{this.props.text}</span>
        );
    }
}