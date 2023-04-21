import React, { useState } from "react";
import "./App.css";
import validationSchema from "./validationSchema";
import validateForm from "./validationForm";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const values = { email, password, firstName, lastName, [name]: value };
        const errors = validateForm(values, validationSchema);
        setErrors(errors);

        setIsFormValid(Object.values(errors).every((error) => error === ""));

        switch (name) {
            case "firstName":
                setFirstName(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
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
                    onChange={handleInputChange}
                />

                {errors.firstName && (
                    <span className="error">{errors.firstName}</span>
                )}

                <input
                    type="text"
                    name="lastName"
                    className="input"
                    placeholder="Enter your lastname..."
                    value={lastName}
                    onChange={handleInputChange}
                />
                {errors.lastName && (
                    <span className="error">{errors.lastName}</span>
                )}

                <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={handleInputChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}

                <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Enter your password..."
                    value={password}
                    onChange={handleInputChange}
                />
                {errors.password && (
                    <span className="error">{errors.password}</span>
                )}
                <button
                    className="button"
                    type="submit"
                    disabled={!isFormValid}
                    style={{
                        opacity:
                            !!errors.firstName ||
                            !!errors.lastName ||
                            !!errors.email ||
                            !!errors.password
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
