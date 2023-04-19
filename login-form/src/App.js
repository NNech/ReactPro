import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if (emailError || passwordError || firstNameError || lastNameError)
            setIsValid(false);
        else {
            setIsValid(true);
        }
    }, [emailError, passwordError, firstNameError, lastNameError]);

    const validateFirstName = (value) => {
        setFirstName(value);
        if (!value) {
            setFirstNameError("First name is required!");
        } else if (!/^[a-zA-Z]{2,}$/.test(value)) {
            setFirstNameError(
                "First name must be at least 2 characters  and contain only letters!"
            );
        } else {
            setFirstNameError("");
        }
    };

    const validateLastName = (value) => {
        setLastName(value);
        if (!value) {
            setLastNameError("Last name is required!");
        } else if (!/^[a-zA-Z]{2,}$/.test(value)) {
            setLastNameError(
                "Last name must be at least 2 characters  and contain only letters!"
            );
        } else {
            setLastNameError("");
        }
    };
    const validateEmail = (value) => {
        setEmail(value);
        if (!value) {
            setEmailError("Email is required!");
        } else if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(value)) {
            setEmailError("Invalid email format!");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = (value) => {
        setPassword(value);
        if (!value) {
            setPasswordError("Password is required!");
        } else if (!/^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{6,10}$/.test(value)) {
            setPasswordError(
                "Password must be 6-10 characters  and contain  one number and one capital letter!"
            );
        } else {
            setPasswordError("");
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Login form fill successfully!");
    };

    return (
        <div className="App">
            <form className="form" onSubmit={handleSubmit}>
                <h2 style={{ color: "salmon" }}>Fill login form </h2>
                <input
                    type="text"
                    name="firstName"
                    className="input"
                    placeholder="Enter your firstname..."
                    value={firstName}
                    onChange={(e) => validateFirstName(e.target.value)}
                />

                {firstNameError && (
                    <span className="error">{firstNameError}</span>
                )}

                <input
                    type="text"
                    name="lastName"
                    className="input"
                    placeholder="Enter your lastname..."
                    value={lastName}
                    onChange={(e) => validateLastName(e.target.value)}
                />
                {lastNameError && (
                    <span className="error">{lastNameError}</span>
                )}

                <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => validateEmail(e.target.value)}
                />
                {emailError && <span className="error">{emailError}</span>}

                <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Enter your password..."
                    value={password}
                    onChange={(e) => validatePassword(e.target.value)}
                />
                {passwordError && (
                    <span className="error">{passwordError}</span>
                )}
                <button
                    className="button"
                    type="submit"
                    disabled={!isValid}
                    style={{
                        opacity:
                            !!emailError ||
                            !!passwordError ||
                            !!firstNameError ||
                            !!lastNameError
                                ? 0.5
                                : 1,
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default App;
