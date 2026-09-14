import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
  ],
  
  base: process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS
    ? '/b15-a05-fahmida/'
    : process.env.NETLIFY
    ? '/'
    : '/b15-a05-fahmida/', 
}))