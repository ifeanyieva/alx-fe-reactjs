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
  const [count, setCount] = useState(0)
  const [error, setError] = useState("");
 const handleSearch = async (username) => {
    try {
      setError(""); // reset error
      const userData = await fetchUserData(username);
      setUser(userData); // save user data
    } catch (err) {
      setError("User not found. Please try again.");
      setUser(null);
    }
  };
}
  

  return (
    <>
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <nav
          style={{
            padding: "10px",
            backgroundColor: "#2e2a2aff",
            display: "flex",
            gap: "15px",
          }}
        >
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
          <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
          <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
         </nav>

         <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && 
        <div style={{ marginTop: "20px" }}>}
          <img
            src={user.avatar_url}
            alt={user.login}
            style={{ width: "120px", borderRadius: "50%" }}
          />
          <h2>{user.name || user.login}</h2>
          <p>{user.bio}</p>
          <p>Followers: {user.followers} | Following: {user.following}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
          </div>
  

         {/* ✅ Page Content */}'
        <div style={{ padding: "20px" }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>
            </Router>
            

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        
        </div>
      
      
  <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
    </>
    
  )


export default App
