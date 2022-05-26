import React from "react";
import { CommonSpan } from "./span";

import "./languages.css"

export class LanguagesContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(2016, 1, 1),
            inputDate: this.props.date,
            styles: {
                width: "0%",
            },
        };
    }

    componentDidMount() {
        this.widthCalc()
        
    }

    widthCalc() {

        var start = new Date(2005,0,1),
            end = new Date(2021,4,5),
            today = new Date();

        var enda = ((this.state.inputDate/today) * 100)
        this.setState({test: enda.toFixed(2) + "%" });
        enda += "%"

        this.setState({styles:{width: enda}});

        console.log(this.state.styles.width)
        // console.log(this.state.inputDate)
        console.log(enda)
        return
    }


    render() {
        return(
            <div className="programming-languages-container">
                <div className="programming-language-text">
                    <p>{this.props.text}</p>
                    <div className="programming-sub-text-container">
                        <span>Start Year: {this.state.inputDate.getFullYear().toString()}</span>
                    </div>
                </div>
                <CommonSpan
                    className="programming-bar-span"
                    style={this.state.styles.width}
                    text={this.state.test}
                />
                <div className="programming-sub-text-container">
                    <span>End Year: {this.state.inputDate.getFullYear().toString()}</span>
                </div>
            </div>
        );
    }
}