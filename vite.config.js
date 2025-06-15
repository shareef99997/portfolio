import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // Set to '/' if using a custom domain directly
  plugins: [react()],
})
