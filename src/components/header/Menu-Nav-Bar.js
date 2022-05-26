import React from "react";

import "./Menu-Nav-Bar.css"

// TODO

export class MenuNavBarContainer extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {        
        return (
            <div className="menu-nav-bar-container" onClick={this.props.onClick}>
                <div className="span-container" data-expanded={this.props.isActive}>
                    <span className="menu-nav-bar-span top" />
                    <span className="menu-nav-bar-span middle" />
                    <span className="menu-nav-bar-span bottom" />
                </div>
            </div>
        );
    }
}