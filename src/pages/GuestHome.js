// src/pages/GuestHome.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function GuestHome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear userRole from localStorage and navigate to login page
    localStorage.removeItem("userRole");
    localStorage.removeItem("guestId"); // Remove guestId if needed
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to Guest Home Page</h1>
      <p>This is your homepage as a Guest.</p>
      <button onClick={handleLogout} style={styles.button}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#f4f4f9",
  },
  button: {
    backgroundColor: "#4caf50",
    color: "#ffffff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "20px",
  },
};
