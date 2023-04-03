import "../App.css";
import React from "react";

class Button1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Stepan",
            age: 25,
        };
    }

    handleClick = () => {
        this.setState(() => ({
            name: "Mycola",
            age: 30,
        }));
    };

    render() {
        return (
            <div style={{ padding: 50 }}>
                <p>
                    name: {this.state.name}, age: {this.state.age}
                </p>
                <button className="button" onClick={this.handleClick}>
                    Click
                </button>
            </div>
        );
    }
}
export default Button1;
