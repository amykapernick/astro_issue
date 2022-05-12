import { defineConfig } from 'astro/config'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  vite: {
    plugins: [
      // eslint()
    ]
  }
})
