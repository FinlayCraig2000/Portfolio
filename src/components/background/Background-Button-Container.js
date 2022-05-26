import React from "react";

export default class BackgroundContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentMode: "dark",
            checked: true,
            text: "🌕"
        };

        this.changeBackground = this.changeBackground.bind(this);
    }
    
    changeBackground() {
        if (this.state.checked) {

            this.setState({text: "🌑"})
            this.setState({currentMode: "light"})
            this.setState({checked: false})

            document.documentElement.setAttribute('dark', 'true');

        } else {
            document.documentElement.removeAttribute('dark', 'true');
            this.setState({currentMode: "dark"})
            this.setState({text: "🌕"})
            this.setState({checked: true})
        }
    }

    render() {
        return(
            <div className="background-colour-container">
                <p>Change background to {this.state.currentMode}:</p>
                <button onClick={this.changeBackground} className="background-toggle-mode dark-mode">
                    <span>
                        {this.state.text}
                    </span>
                </button>
            </div>
        );
    }
}