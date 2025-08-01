<script lang="ts">
	import { Info, BookCopy, Eye, Network, Sigma, Image, Quote } from '@lucide/svelte';
	let { title = '', type = 'info', flow = false } = $props();
</script>

<div>
{#if type == 'none'}
<div class="note_no_margin">
	<div class="head">
		{#if type != 'none'}
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
		{/if}

		{#if flow == false}
			<div class="horiz_line" style:background-color="#fabd2f"></div>
		{:else if title != ''}
			<p class="title">{title}</p>
		{/if}
	</div>

	<div class="content">
		<div class="line" style:background-color="#fabd2f"></div>

		<div class="slot">
			{#if title != ''}
				{#if flow == false}
					<p>{title}</p>
				{/if}
			{/if}
			<slot />
		</div>
	</div>
</div>
{:else if type != 'none'}
<div class="note">
	<div class="head">
		{#if type != 'none'}
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
		{/if}

		{#if flow == false}
			<div class="horiz_line" style:background-color="#fabd2f"></div>
		{:else if title != ''}
			<p class="title">{title}</p>
		{/if}
	</div>

	<div class="content">
		<div class="line" style:background-color="#fabd2f"></div>

		<div class="slot">
			{#if title != ''}
				{#if flow == false}
					<p>{title}</p>
				{/if}
			{/if}
			<slot />
		</div>
	</div>
</div>
{/if}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

	.title {
		margin: 0;
		margin-left: 1em;
		margin-top: 4px;
		font-weight: bolder;
	}

	.note {
		display: block;
		margin: 1em 0 1em 0;
		border-radius: 2px;
	}

	.note_no_margin {
		display: block;
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
