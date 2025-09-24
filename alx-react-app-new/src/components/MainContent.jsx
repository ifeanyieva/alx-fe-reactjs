function MainContent() {
  // Reuse styles similar to UserProfile.jsx
  const containerStyle = {
    border: "1px solid gray",
    padding: "15px",
    margin: "15px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  const textStyle = {
    fontSize: "18px",
    color: "darkslategray",
    margin: "5px 0",
  };

  return (
    <main style={containerStyle}>
      <p style={textStyle}>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

export default MainContent;