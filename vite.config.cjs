const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')
const prerender = require('vite-plugin-prerender')
const path = require('path')

export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: path.join(__dirname, "dist"),
      routes: [
        "/",
        "/about",
        "/branches",
        "/franchising",
        "/contact"
      ]
    })
  ]
});
