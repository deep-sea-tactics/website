// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-cloudflare'; //we love cloudflare
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(), //we just need the default options here

	kit: {
		adapter: adapter()
	}
};

export default config;
