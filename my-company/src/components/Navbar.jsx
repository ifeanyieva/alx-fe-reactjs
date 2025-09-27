import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
        <li><Link to="/services" style={styles.link}>Services</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    background: "linear-gradient(90deg, #4facfe, #00f2fe)",
    padding: "15px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  ul: {
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "30px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "color 0.3s",
  },
};