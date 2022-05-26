
import React from "react";
import { CommonSlider } from "../../common/common-slider";

export class SliderContainer extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {        
        return (
            <div className={this.props.className}>
                <p>
                    {this.props.description} <span>{Math.round(this.props.value)}</span>
                </p>

                <CommonSlider
                  id={this.props.id}
                  type="range" 
                  min={this.props.min}
                  max={this.props.max}
                  value={this.props.value} 
                  onChange={this.props.onChange}
                  step="0.01"
                />
            </div>
        );
    }

}