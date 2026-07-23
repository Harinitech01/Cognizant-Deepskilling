import React from "react";
import officeImage from "./office.avif";

function App() {
  const office = {
    name: "Tech Park Office",
    rent: 55000,
    address: "Tidel Park, Chennai",
  };

  const officeList = [
    {
      name: "Tech Park Office",
      rent: 55000,
      address: "Chennai",
    },
    {
      name: "Cyber Towers",
      rent: 75000,
      address: "Hyderabad",
    },
    {
      name: "Manyata Tech Park",
      rent: 65000,
      address: "Bangalore",
    },
    {
      name: "DLF IT Park",
      rent: 50000,
      address: "Coimbatore",
    },
  ];

  return (
    <div
      style={{
        background: "#eef2f7",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#1e3a8a",
          marginBottom: "30px",
        }}
      >
        🏢 Office Space Rental App
      </h1>

      {/* Featured Office */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            background: "#fff",
            width: "850px",
            display: "flex",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src={officeImage}
            alt="Office"
            style={{
              width: "400px",
              height: "260px",
              objectFit: "cover",
            }}
          />

          <div style={{ padding: "25px", flex: 1 }}>
            <h2 style={{ color: "#2563eb" }}>{office.name}</h2>

            <p style={{ fontSize: "18px" }}>
              <strong>📍 Address:</strong> {office.address}
            </p>

            <p
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: office.rent < 60000 ? "#dc2626" : "#16a34a",
              }}
            >
              ₹ {office.rent.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <h2
        style={{
          textAlign: "center",
          color: "#1e40af",
          marginBottom: "25px",
        }}
      >
        Available Office Spaces
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "25px",
        }}
      >
        {officeList.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              width: "280px",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "0.3s",
            }}
          >
            <h3
              style={{
                color: "#2563eb",
                marginBottom: "15px",
              }}
            >
              {item.name}
            </h3>

            <p>
              <strong>📍 Address:</strong>
              <br />
              {item.address}
            </p>

            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: item.rent < 60000 ? "#dc2626" : "#16a34a",
              }}
            >
              ₹ {item.rent.toLocaleString()}
            </p>

            <button
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "10px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;