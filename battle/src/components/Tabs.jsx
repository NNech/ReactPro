import React from "react";

function Tabs(props) {
    return (
        <ul className="languages">
            {props.languages.map((language, index) => (
                <li
                    key={index}
                    onClick={() => props.onTabClick(language)}
                    style={{
                        color:
                            language === props.selectedLanguage
                                ? "red"
                                : "black",
                    }}
                >
                    {language}
                </li>
            ))}
        </ul>
    );
}

export default Tabs;
