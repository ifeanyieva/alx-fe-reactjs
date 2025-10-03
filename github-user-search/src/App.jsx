import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Navbar from "./components/Navbar"; // ✅ Import Navbar
import { fetchUserData } from "./services/githubService.js";

function Home() {
  return <h1 className="text-2xl font-bold text-center mt-6">🏠 Home Page</h1>;
}

function About() {
  return <h1 className="text-2xl font-bold text-center mt-6">ℹ️ About Page</h1>;
}

function Contact() {
  return <h1 className="text-2xl font-bold text-center mt-6">📞 Contact Page</h1>;
}

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (username) => {
    try {
      setLoading(true);
      setError("");
      setUser(null);

      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError("❌ Looks like we can't find the user. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="font-sans">
        {/* ✅ Navbar at the top */}
        <Navbar />

        <div className="text-center p-6">
          <h1 className="text-3xl font-bold mb-6">🔎 GitHub User Search</h1>

          <Search onSearch={handleSearch} />

          {error && <p className="text-red-500 mt-4">{error}</p>}
          {loading && <p className="text-gray-500 mt-4">Loading...</p>}

          {user && (
            <div className="mt-6 p-6 border rounded-lg shadow-md max-w-md mx-auto text-left">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h2 className="text-xl font-semibold text-center mt-4">
                {user.name || user.login}
              </h2>
              <p className="mt-2">
                <strong>Bio:</strong> {user.bio || "No bio available"}
              </p>
              <p>
                <strong>Followers:</strong> {user.followers} |{" "}
                <strong>Following:</strong> {user.following}
              </p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mt-2 block text-center"
              >
                View Profile →
              </a>
            </div>
          )}

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

