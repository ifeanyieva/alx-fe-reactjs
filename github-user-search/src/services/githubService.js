import axios from "axios";

const GITHUB_BASE_URL = "https://api.github.com/search/users?q";

export const fetchUserData = async (
  username,
  location = "",
  minRepos = "",
  page = 1
) => {
  try {
    let query = "";
    if (username) query += `user:${username}`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(`${GITHUB_BASE_URL}/search/users`, {
      params: {
        q: query.trim() || "type:user", // fallback to all users
        per_page: 5,
        page,
      },
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
          ? `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
          : undefined,
      },
    });

    const items = await Promise.all(
      response.data.items.map(async (basicUser) => {
        const userDetails = await axios.get(
          `${GITHUB_BASE_URL}/users/${basicUser.login}`,
          {
            headers: {
              Accept: "application/vnd.github+json",
              Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
                ? `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
                : undefined,
            },
          }
        );
        return userDetails.data;
      })
    );

    return {
      items,
      hasNextPage: response.data.total_count > page * 5,
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
