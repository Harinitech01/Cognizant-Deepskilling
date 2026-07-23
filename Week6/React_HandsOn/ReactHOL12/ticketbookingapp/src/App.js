import React, { useState } from "react";
import GuestPage from "./Components/GuestPage";
import UserPage from "./Components/UserPage";
import Login from "./Components/Login";
import Logout from "./Components/Logout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "700px",
          margin: "auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#1976d2",
          }}
        >
          ✈ Ticket Booking App
        </h1>

        <div style={{ textAlign: "center" }}>
          {isLoggedIn ? (
            <Logout onLogout={() => setIsLoggedIn(false)} />
          ) : (
            <Login onLogin={() => setIsLoggedIn(true)} />
          )}
        </div>

        {isLoggedIn ? <UserPage /> : <GuestPage />}
      </div>
    </div>
  );
}

export default App;