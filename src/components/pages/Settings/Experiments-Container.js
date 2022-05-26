
import React from "react";

import { SliderContainer } from "./Slider-Component";
import { ResetComponent } from "./Reset";

import "./Experiment-Container.css"

// TODO - redo the way it handles changes to the styles, it works but isn't scaleable

const defaultValuesInterface = {
    defaultFont: 16,
    defaultCube: 400
}

const defaultFontSizeInterface = {
    low: 0,
    high: 100
}

const defaultCubeSizeInterface = {
    low: 50,
    high: 1000
}

export class ExperimentSettingsContainer extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {
            fontValue: defaultValuesInterface.defaultFont,
            cubeValue: defaultValuesInterface.defaultCube,
            style: undefined
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCubeChange = this.handleCubeChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * Chaning the font size settings
     * 
     * @param {*} event - to receive the slider value
     */
    handleChange(event) {
        this.setState({fontValue: event.target.value});

        let a = parseFloat(event.target.value) + 24;
        let b = parseFloat(event.target.value) + 14;

        console.log(event.target.value)
        console.log(a)

        let fontSizeStyleText = "--font-paragraph-size: " + event.target.value + "px"
        let fontSizeStyleText2 = "--font-header-size: " + a + "px"
        let fontSizeStyleText3 = "--font-sub-header-size: " + b + "px"

        document.getElementById("root").style = this.state.style + "; " + fontSizeStyleText + "; " + fontSizeStyleText2 + "; " + fontSizeStyleText3

        this.setState({style: this.state.style + "; " + fontSizeStyleText + "; " + fontSizeStyleText2 + "; " + fontSizeStyleText3});
    }

    /**
     * Changing the cube size setting
     * 
     * @param {*} event - to receive the slider value
     */
    handleCubeChange(event) {
        this.setState({cubeValue: event.target.value});

        let cubeSizeStyleText = "--cube-height: " + event.target.value + "px"
        let cubeSizeStyleText2 = "--cube-width: " + event.target.value + "px"
        let cubeSizeStyleText3 = "--cube-h-and-w: " + event.target.value + "px"

        document.getElementById("root").style = this.state.style + "; " + cubeSizeStyleText + "; " + cubeSizeStyleText2 + "; " + cubeSizeStyleText3

        this.setState({style: this.state.style + "; " + cubeSizeStyleText + "; " + cubeSizeStyleText2 + "; " + cubeSizeStyleText3});
    }

    /**
     *  Clears all of the styles on the root element.
     */
    handleClick() {

        var styleLength = document.getElementById("root").style.length

        for (let a = 0; a < styleLength; a++) {
            var b = document.getElementById("root").style[0]
            document.getElementById("root").style.removeProperty(b);
        }

        this.setState({fontValue: defaultValuesInterface.defaultFont});
        this.setState({cubeValue: defaultValuesInterface.defaultCube});
        this.setState({style: undefined});
    }

    render() {        
        return (
            <div className="experiment-settings-container">
                <div className="fun-setting-description-container">
                    <h3>Fun Settings</h3>
                    <p className="fun-setting-description">
                        Below are some fun settings to mess around for the website,
                        there is a reset button to set everything back to normal.
                        <span className="fun-setting-description-warning">
                            BE CAREFUL WITH THIS SETTINGS!
                        </span>
                    </p>
                </div>

                <SliderContainer 
                    className={"font-size-container"}
                    id={"font-size-id"}
                    descriptions={"Current font paragraph size value:"}
                    min={defaultFontSizeInterface.low}
                    max={defaultFontSizeInterface.high}
                    value={this.state.fontValue}
                    onChange={this.handleChange}
                />

                <SliderContainer 
                    className={"cube-size-container"}
                    id={"cube-size-id"}
                    descriptions={"Current cube size value:"}
                    min={defaultCubeSizeInterface.low}
                    max={defaultCubeSizeInterface.high}
                    value={this.state.cubeValue}
                    onChange={this.handleCubeChange}
                />

                <ResetComponent
                    onClick={this.handleClick}
                />
            </div>
        );
    }

}