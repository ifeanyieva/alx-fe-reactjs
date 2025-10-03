import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);
    setPage(1);

    try {
      const { items, hasNextPage } = await fetchUserData(
        username,
        location,
        minRepos,
        1
      );
      setResults(items);
      setHasMore(hasNextPage);
    } catch (err) {
      setError("Looks like we can’t find users with those criteria.");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    try {
      const { items, hasNextPage } = await fetchUserData(
        username,
        location,
        minRepos,
        nextPage
      );
      setResults((prev) => [...prev, ...items]);
      setPage(nextPage);
      setHasMore(hasNextPage);
    } catch (err) {
      setError("Error loading more users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-4 rounded-md shadow-md"
      >
        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full mb-3 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location (e.g. Lagos)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="block w-full mb-3 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="block w-full mb-3 p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Loading, Error, Results */}
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="flex items-center bg-white p-4 rounded shadow"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h2 className="text-lg font-bold">{user.login}</h2>
              <p className="text-sm text-gray-600">
                Location: {user.location || "N/A"}
              </p>
              <p className="text-sm text-gray-600">
                Public Repos: {user.public_repos}
              </p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && !loading && (
        <button
          onClick={loadMore}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;


