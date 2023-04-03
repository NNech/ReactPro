import "./App.css";
import React from "react";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import Button3 from "./components/Button3";

class App extends React.Component {
    render() {
        return (
            <>
                <Button1 />
                <Button2 />
                <Button3 />
            </>
        );
    }
}
export default App;
