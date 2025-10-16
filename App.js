import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => {
  return <>
<div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)"
}}>
    <h2 style={{ color: "#fff", marginBottom: "2rem" }}>Login</h2>
    <form style={{
        background: "#fff",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        minWidth: "300px"
    }}>
        <label style={{ marginBottom: "0.5rem", color: "#333" }}>Email</label>
        <input
            type="email"
            placeholder="Enter your email"
            style={{
                padding: "0.75rem",
                marginBottom: "1rem",
                borderRadius: "5px",
                border: "1px solid #ccc"
            }}
        />
        <label style={{ marginBottom: "0.5rem", color: "#333" }}>Password</label>
        <input
            type="password"
            placeholder="Enter your password"
            style={{
                padding: "0.75rem",
                marginBottom: "1.5rem",
                borderRadius: "5px",
                border: "1px solid #ccc"
            }}
        />
        <button
            type="submit"
            style={{
                padding: "0.75rem",
                background: "#6B73FF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold"
            }}
        >
            Login
        </button>
    </form>
</div>
  </>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);

