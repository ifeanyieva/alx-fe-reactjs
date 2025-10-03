import { useState } from "react";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    if (username.trim() === "") {
      alert("Please enter a GitHub username");
      return;
    }
    onSearch(username); // pass value to parent (App.jsx)
    setUsername(""); // clear input
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: "20px 0",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <input
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Enter GitHub username"
        style={{
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          width: "250px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 15px",
          backgroundColor: "#24292e",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </form>
  );
}

export default Search;