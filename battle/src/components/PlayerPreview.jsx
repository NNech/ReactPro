import React from "react";

function PlayerPreview({ avatar, userName, children }) {
    return (
        <div>
            <div className="column">
                <img className="avatar" src={avatar} alt="Avatar" />
                <h2 className="username">@{userName}</h2>
            </div>
            {children}
        </div>
    );
}

export default PlayerPreview;
