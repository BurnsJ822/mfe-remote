import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote_app',
      remotes: {
        burns: "https://mfe-remote-three.vercel.app/assets/remoteEntry.js",
        reilly: "https://mfe-remote-test-fn19.vercel.app/assets/remoteEntry.js",
        leo: "https://remote-test.vercel.app/assets/remoteEntry.js",

      },
      filename: 'remoteEntry.js',
      exposes: {
        './Counter': './src/Counter',
        './ToDo': './src/ToDo'
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
