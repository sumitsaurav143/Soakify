import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://soakify.in/', 
  server: {
    host: true, // Allows external devices to connect
    port: 5173, // You can specify a port if needed
  },
})
