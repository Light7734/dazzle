import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex-svelte';
import rehypeMermaid from 'rehype-mermaid'; // Import rehype-mermaid

const config = defineConfig({
	extensions: ['.md', '.svx'],
    layout: "./src/routes/articles/Layout.svelte",

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [remarkMath],
	rehypePlugins: [rehypeKatex, rehypeMermaid]
});

export default config;
