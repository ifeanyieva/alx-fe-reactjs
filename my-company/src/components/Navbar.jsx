import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#007BFF", // Navbar background
        padding: "15px 20px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Link
        to="/"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontSize: "1.1rem",
          fontWeight: "bold",
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontSize: "1.1rem",
          fontWeight: "bold",
        }}
      >
        About
      </Link>
      <Link
        to="/services"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontSize: "1.1rem",
          fontWeight: "bold",
        }}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontSize: "1.1rem",
          fontWeight: "bold",
        }}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
