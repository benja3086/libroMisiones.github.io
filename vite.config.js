export default defineConfig({
  base: '/libroMisiones.github.io/', // 👈 poné exactamente el nombre del repo de GitHub
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})