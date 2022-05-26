import React from "react";

export default class TodoContainer extends React.Component {
    render() {
        return(
            <div className="todo-container">
                <header className="todo-header">TODO</header>
                <div className="todo-features-container">
                    <p>Features</p>
                    <ul className="todo-ul-container">
                        <li>Fill information on each page</li>
                        <li>Resize the cube when changing window sizes</li>
                        <li>Make the side naviagtion change depending on the window size</li>
                        <li>Implement more settings (button sliders, colour blind mode etc.)</li>
                        <li>Save last position of the cube</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
                <div className="todo-bugs-container">
                    <p>Bugs</p>
                    <ul className="todo-ul-container">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>

                <div className="todo-bugs-container">
                    <p>Information</p>
                    <ul className="todo-ul-container">
                        <li>800 x 800 is the size limit of the box atm</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
            </div>
        );
    }
}

font-size - 10px
cube - 155px