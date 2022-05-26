
import React from "react";

export class CommonSlider extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {        
        return (
            <input 
                id={this.props.id} 
                type="range"
                min={this.props.min}
                max={this.props.max}
                value={this.props.value} 
                onChange={this.props.onChange}
                step="0.01"
                aria-label="common-slider"
            />
        );
    }

}