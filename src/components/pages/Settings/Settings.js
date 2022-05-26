import React from "react";

import BackgroundContainer from '../../background/Background-Button-Container.js';
import ColourBlindButtonContainer from "../../background/Colour-Blind-Buton-Container.js";
import { ExperimentSettingsContainer } from "./Experiments-Container.js";

import "./Settings.css";

export default class SettingsContainer extends React.Component {
    render() {
        return(
            <div className="settings-container">
                <div className="setting-header-container">
                    <header className="settings-header">Settings</header>
                </div>
                <div className="settings-options-containers">
                    <div className="temp-make-container-better-named test-overhidden">
                        <BackgroundContainer />
                        <ColourBlindButtonContainer />
                    </div>

                    <ExperimentSettingsContainer />
                </div>
            </div>
        );
    }
}