import math from 'remark-math';
import rehype_katex from 'rehype-katex';
import katex from 'katex';
import visit from 'unist-util-visit';

const gruvboxColorMap = {
	red: '#fb4934',
	green: '#98971a',
	yellow: '#fabd2f',
	blue: '#458588',
	purple: '#d3869b',
	cyan: '#8ec07c',
	orange: '#fe8019',
	black: '#282828',
	white: '#ebdbb2',
	gray: '#a89984'
};

const override_katex_colors = () => (tree) => {
	visit(tree, 'element', (node) => {
		if (node.tagName === 'span' && node.properties?.className?.includes('katex')) {
			removeInlineColors(node);
		}
	});
};

function removeInlineColors(node) {
	if (node.properties?.style && typeof node.properties.style === 'string') {
		// Split style string into individual declarations
		const styles = node.properties.style.split(';').map(s => s.trim()).filter(Boolean);
		const newStyles = styles.map(style => {
			const [key, value] = style.split(':').map(s => s.trim());
			if (key === 'color' && gruvboxColorMap[value]) {
				return `color: ${gruvboxColorMap[value]}`;
			}
			return `${key}: ${value}`;
		});
		node.properties.style = newStyles.join('; ');
	}

	if (node.children) {
		node.children.forEach(removeInlineColors);
	}
}

const correct_hast_tree = () => (tree) => {
	visit(tree, 'text', (node) => {
		if (node.value.trim().startsWith('<')) {
			node.type = 'raw';
		}
	});
};

const katex_blocks = () => (tree) => {
	visit(tree, 'code', (node) => {
		if (node.lang === 'math') {
			let str = katex.renderToString(node.value, {
				displayMode: true,
				leqno: false,
				fleqn: false,
				throwOnError: true,
				errorColor: '#cc0000',
				strict: 'warn',
				output: 'htmlAndMathml',
				trust: false,
				macros: {
					'\\f': '#1f(#2)'
				}
			});

			for (const [name, gruvColor] of Object.entries(gruvboxColorMap)) {
				const regex = new RegExp(`(style="[^"]*)color:\\s*${name}\\b`, 'g');
				str = str.replace(regex, `$1color: ${gruvColor}`);
			}

			node.type = 'raw';
			node.value = '{@html `' + str + '`}';
		}
	});
};

export const mdsvex_config = {
	extensions: ['.md', '.svx'],
	layout: './src/routes/articles/Layout.svelte',

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [math, katex_blocks],
	rehypePlugins: [correct_hast_tree, rehype_katex, override_katex_colors]
};
