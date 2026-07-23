import React from "react";

function Login({ onLogin }) {
  return (
    <button
      onClick={onLogin}
      style={{
        background: "#1976d2",
        color: "white",
        border: "none",
        padding: "10px 25px",
        borderRadius: "8px",
        cursor: "pointer",
        marginBottom: "20px",
      }}
    >
      Login
    </button>
  );
}

export default Login;