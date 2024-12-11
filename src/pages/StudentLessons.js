import React, { useState, useEffect } from "react";

export default function StudentLessons() {
  const [lessons, setLessons] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchLessons();
  }, []);

  // Fetch lessons from backend
  const fetchLessons = async () => {
    try {
      const response = await fetch("http://localhost:8080/lessons");
      if (!response.ok) {
        throw new Error("Failed to fetch lessons");
      }
      const data = await response.json();
      setLessons(data);
    } catch (error) {
      console.error("Error fetching lessons:", error);
      setError("Failed to fetch lessons. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.pageTitle}>Lessons</h1>

      {isLoading ? (
        <p style={styles.loadingText}>Loading lessons...</p>
      ) : error ? (
        <p style={styles.errorText}>{error}</p>
      ) : lessons.length > 0 ? (
        <div style={styles.lessonsList}>
          {lessons.map((lesson) => (
            <div key={lesson.id} style={styles.lessonCard}>
              <h3 style={styles.lessonTitle}>{lesson.title}</h3>
              <p style={styles.lessonContent}>{lesson.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p style={styles.noLessonsText}>No lessons available at the moment.</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "30px auto",
    padding: "30px",
    backgroundColor: "#f4f8fb", // Soft background color
    borderRadius: "10px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)", // Softer shadow for a floating effect
    fontFamily: "'Arial', sans-serif",
  },
  pageTitle: {
    textAlign: "center",
    fontSize: "30px",
    color: "#343a40",
    marginBottom: "25px",
    fontWeight: "600", // Bold title
  },
  loadingText: {
    textAlign: "center",
    fontSize: "18px",
    color: "#6c757d",
  },
  errorText: {
    textAlign: "center",
    fontSize: "16px",
    color: "#e74c3c", // Red color for error
    fontWeight: "bold",
  },
  noLessonsText: {
    textAlign: "center",
    fontSize: "18px",
    color: "#6c757d",
  },
  lessonsList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", // Responsive grid layout
    gap: "20px",
  },
  lessonCard: {
    padding: "20px",
    backgroundColor: "#ffffff",
    border: "1px solid #ced4da",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Add smooth transform effect
    cursor: "pointer", // Change cursor to pointer on hover
  },
  lessonCardHover: {
    transform: "scale(1.03)", // Slight zoom effect on hover
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", // Increase shadow on hover
  },
  lessonTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#343a40",
  },
  lessonContent: {
    fontSize: "16px",
    color: "#495057",
    lineHeight: "1.5",
  },
};
