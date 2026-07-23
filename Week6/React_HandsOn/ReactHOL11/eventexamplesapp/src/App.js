import React from "react";
import Counter from "./Components/Counter";
import CurrencyConvertor from "./Components/CurrencyConvertor";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "700px",
          background: "#fff",
          borderRadius: "15px",
          padding: "30px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#1976d2",
            marginBottom: "30px",
          }}
        >
          React Event Handling Examples
        </h1>

        <Counter />

        <hr style={{ margin: "30px 0" }} />

        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;