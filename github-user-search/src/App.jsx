import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService.js"; // hypothetical API service

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  // Handle form submission from Search component
  const handleSearch = async (username) => {
    try {
      setError(""); // reset any previous error
      const userData = await fetchUserData(username); // call service
      setUser(userData); // save user data
    } catch (err) {
      setError("❌ User not found. Please try again.");
      setUser(null); // clear user state
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
      <h1>🔎 GitHub User Search</h1>
      
      {/* Search Form */}
      <Search onSearch={handleSearch} />

      {/* Error Message */}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {/* User Profile Display */}
      {user && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            display: "inline-block",
            textAlign: "left",
          }}
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            style={{ width: "120px", borderRadius: "50%", display: "block", margin: "0 auto" }}
          />
          <h2 style={{ textAlign: "center" }}>{user.name || user.login}</h2>
          <p><strong>Bio:</strong> {user.bio || "No bio available"}</p>
          <p><strong>Followers:</strong> {user.followers} | <strong>Following:</strong> {user.following}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "none" }}
          >
            View Profile →
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
