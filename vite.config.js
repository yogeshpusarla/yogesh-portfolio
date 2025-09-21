import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to https://<user>.github.io/REPO_NAME/ change base to '/REPO_NAME/'
// If deploying to https://<user>.github.io or using Vercel/Netlify, leave as '/'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: '/', // custom domain = root path
})
