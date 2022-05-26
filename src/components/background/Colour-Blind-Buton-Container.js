import React from "react";

export default class ColourBlindButtonContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: true,
            text: "😎"
        };

        this.changeBackground = this.changeBackground.bind(this);
    }
    
    changeBackground() {
        if (this.state.checked) {

            this.setState({text: "😎"})
            this.setState({checked: false})

            document.documentElement.setAttribute('blind', 'true');

        } else {
            document.documentElement.removeAttribute('blind', 'true');
            this.setState({text: "🙂"})
            this.setState({checked: true})
        }
    }

    render() {
        return(
            <div className="background-colour-container">
                <p>Change background to colour blind - In progress: </p>
                <button onClick={this.changeBackground} className="background-toggle-mode colour-blind">
                    <span>
                        {this.state.text}
                    </span>
                </button>
            </div>
        );
    }
}