import React from "react";
import { MenuNavBarContainer } from "./Menu-Nav-Bar";
import { NavBarContainer } from "./Nav-Bar-Container";

import "./Header-Container.css"

// TODO - Change the expanded css as it's used twice.

export default class HeaderContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };

        this.menuBarToggle = this.menuBarToggle.bind(this);
    }

    menuBarToggle() {
      this.setState({ isActive: !this.state.isActive });
    };

    render() {
        return(
            <nav className="header-nav-container" data-expanded={this.state.isActive}>
                <MenuNavBarContainer
                    isActive={this.state.isActive}
                    onClick={this.menuBarToggle}
                />

                <NavBarContainer />
            </nav>
        );
    }
}