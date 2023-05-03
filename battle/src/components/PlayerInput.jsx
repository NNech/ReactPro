import React, { useState } from "react";

const PlayerInput = ({ id, label, onSubmit }) => {
    const [userName, setUserName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(id, userName);
    };
    return (
        <form className="column" onSubmit={handleSubmit}>
            <label className="header" htmlFor="userName">
                {label}
            </label>
            <input
                type="text"
                value={userName}
                placeholder="Github username"
                autoComplete="off"
                onChange={(event) => {
                    setUserName(event.target.value);
                }}
            />
            <button className="button" disabled={!userName} type="submit">
                Submit
            </button>
        </form>
    );
};

export default PlayerInput;
