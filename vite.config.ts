import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,          // allows external access (0.0.0.0)
    port: 3000,
    open: true,
    allowedHosts: 'all'  // REQUIRED for localtunnel / ngrok
  }
})
