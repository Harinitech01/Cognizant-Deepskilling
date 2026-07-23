import React from "react";

function Logout({ onLogout }) {
  return (
    <button
      onClick={onLogout}
      style={{
        background: "#d32f2f",
        color: "white",
        border: "none",
        padding: "10px 25px",
        borderRadius: "8px",
        cursor: "pointer",
        marginBottom: "20px",
      }}
    >
      Logout
    </button>
  );
}

export default Logout;