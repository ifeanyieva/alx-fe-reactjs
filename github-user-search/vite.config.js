import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ""); // loads .env values
  return {
    define: {
      __APP_GITHUB_API_KEY__: JSON.stringify(env.VITE_APP_GITHUB_API_KEY),
    },
  };
});



