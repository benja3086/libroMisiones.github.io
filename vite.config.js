import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/libroMisiones.github.io/', // 👈 MUY importante para GitHub Pages
})
