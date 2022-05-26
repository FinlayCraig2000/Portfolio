import React from "react";

// TODO

export class Button extends React.PureComponent {
    render() {        
        return (
            <button className={`button ${this.props.className ?? ""}`} onClick={`() => void`}></button>
        );
    }
}