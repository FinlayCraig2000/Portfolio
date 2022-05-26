import React from "react";

import "./Nav-Bar-Container.css"

const ButtonValueLinks = ['front', 'right', 'back', 'left', 'top', 'bottom']

export class NavBarContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            currentClass: "show-front"
        };

        this.changeCubeFace = this.changeCubeFace.bind(this);
    }

    changeHeaderNavButtonDisplay(CubeFaceInput) {
        /** Add and removing active from the header navigation buttons */
        // var list = document.querySelector('.header-nav-inner-container');
        var list = document.querySelectorAll('.header-nav-button');
        var listActive = document.querySelector("div.active");
    
        // console.log(listActive);
        // console.log(list);
        // console.log(list[ButtonValueLinks.indexOf(CubeFaceInput)])
        
        listActive.classList.remove("active");
        list[ButtonValueLinks.indexOf(CubeFaceInput)].classList.add("active");
    }
    
    /**
     * Changing the cube face
     * 
     * @param {*} CubeFaceInput 
     * @returns 
     */
    changeCubeFace(CubeFaceInput) {
        // console.log(CubeFaceInput.target.dataset.value)

        var cubeFaceInputValue = CubeFaceInput.target.dataset.value;
        
        if (this.state.currentClass === "show-" + cubeFaceInputValue) {
            return
        }
        
        // Bug fix if user click between the buttons
        if (ButtonValueLinks.indexOf(cubeFaceInputValue) <= -1) {
            return
        }

        var cubeQuery = document.querySelector('.cube');

        this.setState({CubeFace: cubeFaceInputValue})

        if (this.state.currentClass) {
            cubeQuery.classList.remove(this.state.currentClass);
        }
        var showClass = 'show-' + cubeFaceInputValue;
        cubeQuery.classList.add(showClass);

        this.changeHeaderNavButtonDisplay(cubeFaceInputValue);

        this.setState({currentClass: showClass})
    }

    render() {
        return(
            <div className="nav-bar-inner-container" onClick={this.changeCubeFace}>
                <div className="header-nav-button header-nav-font active">
                    <p data-value="front">About</p>
                </div>

                <div className="header-nav-button header-nav-font">
                    <p  data-value="right">CV</p>
                </div>

                <div className="header-nav-button header-nav-font">
                    <p data-value="back">Projects</p>
                </div>
                
                <div className="header-nav-button header-nav-font">
                    <p data-value="left">Skills</p>
                </div>

                <div className="header-nav-button header-nav-font">
                    <p data-value="top">Work</p>
                </div>

                <div className="header-nav-button header-nav-font">
                    <p data-value="bottom">Settings</p>
                </div>
            </div>
        );
    }
}