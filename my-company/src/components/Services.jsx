function Services() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Our Services</h1>
      <ul style={styles.list}>
        <li style={styles.item}>🌐 Web Development</li>
        <li style={styles.item}>📱 Mobile App Design</li>
        <li style={styles.item}>🎨 UI/UX Consulting</li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: "50px",
    background: "#e6ffe6",
    minHeight: "80vh",
  },
  title: {
    fontSize: "32px",
    color: "#006400",
    marginBottom: "20px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    fontSize: "18px",
  },
  item: {
    padding: "10px 0",
    borderBottom: "1px solid #ccc",
    color: "#333",
  },
};

   export default Services;