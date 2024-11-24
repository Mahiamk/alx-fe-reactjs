import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // Manage error messages

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required.";
    }
    if (!email) {
      newErrors.email = "Email is required.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log("Form submitted:", { username, email, password });

    alert("User Registered Successfully!");

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username} // Controlled value
            onChange={(e) => setUsername(e.target.value)} // Update state
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.username && (
            <div style={{ color: "red", marginTop: "5px" }}>{errors.username}</div>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email} // Controlled value
            onChange={(e) => setEmail(e.target.value)} // Update state
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.email && (
            <div style={{ color: "red", marginTop: "5px" }}>{errors.email}</div>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password} // Controlled value
            onChange={(e) => setPassword(e.target.value)} // Update state
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.password && (
            <div style={{ color: "red", marginTop: "5px" }}>{errors.password}</div>
          )}
        </div>

        <button
          type="submit"
          style={{
            padding: "10px",
            background: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
