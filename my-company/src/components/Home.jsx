function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Our Website</h1>
      <p style={styles.text}>
        Explore our services, learn more about us, and feel free to reach out through our contact page.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "50px",
    textAlign: "center",
    background: "#f0f8ff",
    minHeight: "80vh",
  },
  title: {
    fontSize: "36px",
    color: "#333",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    color: "#555",
  },
};

   export default Home;