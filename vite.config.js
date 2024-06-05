import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            '@': path.join(__dirname, '/resources/js/'),
            'resources': path.join(__dirname, '/resources/')
        }
    }
});
