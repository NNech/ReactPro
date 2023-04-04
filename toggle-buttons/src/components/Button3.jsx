import "../App.css";
import React from "react";

class Button3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggleOn: true,
            isVision: false,
        };
    }

    handleClick = () => {
        this.setState((prevState) => ({
            name: "Mycola",
            age: 30,
            isVision: !prevState.isVision,
            isToggleOn: !prevState.isToggleOn,
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
                    {this.state.isToggleOn ? "Show" : "Hide"}
                </button>
            </div>
        );
    }
}
export default Button3;
