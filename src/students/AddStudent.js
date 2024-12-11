import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/student", studentData);

      // Handle the success when status is 201 (Created)
      if (response.status === 201) {
        alert("Signup successful!");
        navigate("/studenthome");  // Navigate to student home on success
      } else {
        alert("Signup failed: " + (response.data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error during signup", error);

      // Handle errors
      if (error.response) {
        console.log("Error response data:", error.response.data);
        alert("Signup failed: " + (error.response.data.message || "An error occurred"));
      } else {
        alert("An error occurred during signup. Please try again.");
      }
    }
};


  return (
    <div className="container">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={studentData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={studentData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={studentData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success mt-3">
          Add Student
        </button>
      </form>
    </div>
  );
}
