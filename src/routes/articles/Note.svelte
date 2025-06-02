<script lang="ts">
	import { Info, BookCopy, Eye, Network, Sigma, Image, Quote } from '@lucide/svelte';
	let { title = '', type = 'info' } = $props();
</script>

<div class="note">
	<div class="head">
		<div class="icon">
			{#if type == 'info'}
				<Info />
			{:else if type == 'image'}
				<Image />
			{:else if type == 'diagram'}
				<Network />
			{:else if type == 'quote'}
				<Quote />
			{:else if type == 'math'}
				<Sigma />
			{:else if type == 'review'}
				<Eye />
			{:else if type == 'resource'}
				<BookCopy />
			{/if}
		</div>

		{#if type == 'info'}
			<div class="horiz_line" style:background-color="#8ec07c"></div>
		{:else if type == 'diagram'}
			<div class="horiz_line" style:background-color="#d3869b"></div>
		{:else if type == 'quote'}
			<div class="horiz_line" style:background-color="#d3869b"></div>
		{:else if type == 'image'}
			<div class="horiz_line" style:background-color="#d3869b"></div>
		{:else if type == 'math'}
			<div class="horiz_line" style:background-color="#fe8019"></div>
		{:else if type == 'review'}
			<div class="horiz_line" style:background-color="#cc241d"></div>
		{:else if type == 'resource'}
			<div class="horiz_line" style:background-color="#458588"></div>
		{/if}
	</div>

	<div class="content">
		{#if type == 'info'}
			<div class="line" style:background-color="#8ec07c"></div>
		{:else if type == 'diagram'}
			<div class="line" style:background-color="#d3869b"></div>
		{:else if type == 'quote'}
			<div class="line" style:background-color="#d3869b"></div>
		{:else if type == 'image'}
			<div class="line" style:background-color="#d3869b"></div>
		{:else if type == 'math'}
			<div class="line" style:background-color="#fe8019"></div>
		{:else if type == 'review'}
			<div class="line" style:background-color="#cc241d"></div>
		{:else if type == 'resource'}
			<div class="line" style:background-color="#458588"></div>
		{/if}

		<div class="slot">
			{#if title != ''}
				<p class="title">{title}</p>
			{/if}
			<slot />
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

	.title {
	}

	.note {
		display: block;
		margin: 1em 0 1em 0;
		border-radius: 2px;
	}

	.head {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		text-align: left;
	}

	.content {
		display: flex;
		margin-bottom: -1em;
		padding: 0;
		margin-right: auto;
		margin-left: 0;
	}

	.line {
		width: 0.1em;
		margin-left: 0.85em;
		margin-bottom: 1em;
		margin-top: 0.5em;
	}

	.horiz_line {
		height: 0.1em;
		margin-left: 0.5em;

		margin-top: 0.7em;
		display: inline-block;
		flex: 1;
	}

	.slot {
		margin-left: 1em;
		width: 100%;
	}

	.slot > p {
		flex: 1;
		font-family: 'IBM Plex Mono', monospace;
		display: inline-block;
		margin: 0;
		font-weight: bolder;
	}

	.icon {
	}

	.icon:first-child {
	}
</style>
