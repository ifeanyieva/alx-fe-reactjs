import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      // For simplicity, we still use fetchUserData with username
      // Advanced criteria like location & repos will need a modified API call later
      const userData = await fetchUserData(username);

      // Apply simple client-side filtering
      if (
        (location && userData.location?.toLowerCase() !== location.toLowerCase()) ||
        (minRepos && userData.public_repos < parseInt(minRepos))
      ) {
        throw new Error("User does not meet search criteria");
      }

      setUser(userData);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 flex flex-col items-center">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          GitHub Advanced Search
        </h2>

        {/* Username Field */}
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-400"
          required
        />

        {/* Location Field */}
        <input
          type="text"
          placeholder="Enter location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-400"
        />

        {/* Minimum Repos Field */}
        <input
          type="number"
          placeholder="Minimum number of repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-400"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-400"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
      {user && (
        <div className="mt-6 p-6 bg-gray-50 rounded-lg shadow-md text-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-32 h-32 rounded-full mx-auto"
          />
          <h2 className="text-xl font-bold mt-4">{user.name || user.login}</h2>
          <p className="text-gray-600">{user.location || "Location not provided"}</p>
          <p className="text-gray-600">Repos: {user.public_repos}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-blue-600 hover:underline"
          >
            View GitHub Profile →
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;


