import { defineConfig } from "vite";
import liveReload from "vite-plugin-live-reload";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
	plugins: [
		viteStaticCopy({
			targets: [
				{ src: path.resolve(__dirname, "src/img"), dest: path.resolve(__dirname, "dist") },
				{ src: path.resolve(__dirname, "src/icons"), dest: path.resolve(__dirname, "dist") },
				{ src: path.resolve(__dirname, "src/favicon.ico"), dest: path.resolve(__dirname, "dist") },
			],
		}),
	],

	build: {
		outDir: path.resolve(__dirname, "dist"),
		assetsDir: "./src",
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, "src/js/main.js"),
			},
            output: {
                entryFileNames: `[name].js`,
                chunkFileNames: `[name].js`,
                assetFileNames: `[name].[ext]`,
            }
		},
	},
	
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	
	server: {
		cors: true,
		https: false,
        host: true,
        strictPort: true,
        hmr: {host: 'localhost', protocol: 'ws'},
        watch: {
            usePolling: true,
        }
	},
});