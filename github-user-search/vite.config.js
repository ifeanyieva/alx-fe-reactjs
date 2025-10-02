import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export async function fetchUser(username) {
  const response = await fetch(`${baseUrl}/users/${username}`, {
    headers: {
      Authorization: `token ${apiKey}`,
    },
  });
  return response.json();
}

