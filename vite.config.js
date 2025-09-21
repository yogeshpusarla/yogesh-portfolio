import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/yogesh-portfolio/',   // IMPORTANT for repo site
})
