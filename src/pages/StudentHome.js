import React from "react";

export default function StudentHome() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to Your Dashboard</h1>
      <p style={styles.subtitle}>
        Explore lessons, track your progress, and achieve your sustainable living goals!
      </p>
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <img
            src="https://interacty.me/_next/static/image/pages/educationComponent/i/main/image1.d085887fdfcadfd40a6c6e52c4f01891.png"
            alt="Lessons"
            style={styles.cardImage}
          />
          <h3 style={styles.cardTitle}>Interactive Lessons</h3>
          <p style={styles.cardText}>
            Learn eco-friendly practices with engaging and interactive lessons.
          </p>
        </div>
        <div style={styles.card}>
          <img
            src="https://i.ytimg.com/vi/SVVG-Pv3UN8/0.jpg"
            alt="Progress"
            style={styles.cardImage}
          />
          <h3 style={styles.cardTitle}>Track Your Progress</h3>
          <p style={styles.cardText}>
            Stay motivated by monitoring your sustainable living milestones.
          </p>
        </div>
        <div style={styles.card}>
          <img
            src="https://img.freepik.com/premium-vector/join-our-community-bright-invitation-vector-banner-isolated-white-background_705714-2393.jpg"
            alt="Community"
            style={styles.cardImage}
          />
          <h3 style={styles.cardTitle}>Join the Community</h3>
          <p style={styles.cardText}>
            Connect with like-minded students and share ideas for a greener future.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#f0f8ff",
    fontFamily: "'Arial', sans-serif",
  },
  header: {
    fontSize: "2.5rem",
    color: "#2c7a7b",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#4a5568",
    marginBottom: "30px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    width: "300px",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    textAlign: "center",
  },
  cardImage: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  cardTitle: {
    fontSize: "1.5rem",
    color: "#2c7a7b",
    marginTop: "10px",
  },
  cardText: {
    fontSize: "1rem",
    color: "#4a5568",
    marginTop: "10px",
  },
};
