import "../App.css";
import React from "react";

class Button2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVision: false,
        };
    }

    handleClick = () => {
        this.setState((prevState) => ({
            name: "Mycola",
            age: 30,
            isVision: !prevState.isVision,
        }));
    };

    render() {
        return (
            <div style={{ padding: 50 }}>
                {this.state.isVision ? (
                    <p>
                        name: {this.state.name}, age: {this.state.age}
                    </p>
                ) : (
                    ""
                )}
                <button className="button" onClick={this.handleClick}>
                    Click
                </button>
            </div>
        );
    }
}
export default Button2;
