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
    alert(`Thank you, ${formData.name}! Your message was recorded.`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        backgroundColor: "#f4f6f8",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "30px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
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
              width: "100%",
              margin: "10px 0",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "1rem",
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              margin: "10px 0",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "1rem",
            }}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            style={{
              width: "100%",
              margin: "10px 0",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "1rem",
              resize: "none",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#007BFF",
              color: "#fff",
              fontSize: "1rem",
              fontWeight: "bold",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Send Message
          </button>
        </form>

        {/* Live preview */}
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ marginBottom: "10px" }}>Preview:</h3>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Message:</strong> {formData.message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

