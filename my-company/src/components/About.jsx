function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.text}>
        We are a passionate team dedicated to providing excellent services and building lasting relationships with our clients.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "50px",
    textAlign: "left",
    background: "#fff0f5",
    minHeight: "80vh",
  },
  title: {
    fontSize: "32px",
    color: "#8b008b",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    color: "#333",
  },
};

   export default About;