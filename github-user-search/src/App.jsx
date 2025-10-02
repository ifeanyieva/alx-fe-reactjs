import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
            backgroundColor: "#333",
            display: "flex",
            gap: "15px",
          }}
        >
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
          <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
          <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
         </nav>
         {/* ✅ Page Content */}
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        </div>
        </Routes>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </Router>
    </>
    
  )
}

export default App
