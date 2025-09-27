import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f0f8ff",
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#2e8b57", marginBottom: "20px" }}>
          Contact Us
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={{
              display: "block",
              width: "100%",
              padding: "12px",
              margin: "10px 0",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "16px",
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              display: "block",
              width: "100%",
              padding: "12px",
              margin: "10px 0",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "16px",
            }}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={{
              display: "block",
              width: "100%",
              padding: "12px",
              margin: "10px 0",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "16px",
              minHeight: "120px",
            }}
          />

          <button
            type="submit"
            style={{
              display: "block",
              width: "100%",
              padding: "12px",
              backgroundColor: "#2e8b57",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "10px",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#246b43")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2e8b57")}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
