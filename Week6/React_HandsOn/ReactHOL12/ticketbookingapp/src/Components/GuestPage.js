import React from "react";

function GuestPage() {
  const flights = [
    {
      id: 1,
      from: "Chennai",
      to: "Bangalore",
      price: 3500,
    },
    {
      id: 2,
      from: "Delhi",
      to: "Mumbai",
      price: 5200,
    },
    {
      id: 3,
      from: "Hyderabad",
      to: "Kolkata",
      price: 4100,
    },
  ];

  return (
    <div>
      <h2 style={{ color: "#1976d2" }}>
        ✈ Flight Details (Guest View)
      </h2>

      <p>Please login to book tickets.</p>

      {flights.map((flight) => (
        <div
          key={flight.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
            background: "#fff",
          }}
        >
          <h3>
            {flight.from} ➜ {flight.to}
          </h3>

          <p>Fare : ₹{flight.price}</p>
        </div>
      ))}
    </div>
  );
}

export default GuestPage;