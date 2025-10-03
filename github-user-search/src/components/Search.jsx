import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      // ✅ Updated error message
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {/* Search Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            marginRight: "10px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#0070f3",
            color: "white",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p style={{ marginTop: "15px" }}>Loading...</p>}
      {error && <p style={{ marginTop: "15px", color: "red" }}>{error}</p>}
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
            style={{
              width: "120px",
              borderRadius: "50%",
              display: "block",
              margin: "0 auto",
            }}
          />
          <h2 style={{ textAlign: "center" }}>{user.name || user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "blue",
              textDecoration: "none",
              display: "block",
              textAlign: "center",
            }}
          >
            View GitHub Profile →
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;

