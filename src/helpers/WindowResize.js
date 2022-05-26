import React from "react";

function reportWindowSize() {
    var heightOutput = window.innerHeight;
    var widthOutput = window.innerWidth;

    console.log("---");
    console.log("Height:" + heightOutput);
    console.log("Width:" + widthOutput);
    console.log("\n");
}

/** Needs more looking at but seems to do what is does.
 * 
 * Check out 'useEffect()' as this might be more suitable then comonentDidMount
 * https://www.w3schools.com/react/react_useeffect.asp
 * 
 * Also make this a function and add the componentDidMount in the App.js
 */

export class WindowResize extends React.Component {

    componentDidMount() {
        // Uncomment this section and it'll work

        window.addEventListener('resize', reportWindowSize);
    }

    componentWillUnmount() {
        window.addEventListener('resize', reportWindowSize);
    }

    render() {
        return(null);
    }
}