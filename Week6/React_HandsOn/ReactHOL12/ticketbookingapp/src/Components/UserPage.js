import React from "react";

function UserPage() {
  return (
    <div
      style={{
        textAlign: "center",
        background: "#e8f5e9",
        padding: "30px",
        borderRadius: "12px",
      }}
    >
      <h2 style={{ color: "#2e7d32" }}>
        🎉 Welcome User
      </h2>

      <h3>You can now book your flight tickets.</h3>

      <button
        style={{
          padding: "12px 30px",
          background: "#1976d2",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Book Ticket
      </button>
    </div>
  );
}

export default UserPage;