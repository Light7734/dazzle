<script lang="ts">
	import { Info } from '@lucide/svelte';
	export let title;
</script>

<div class="note">
	<div class="head">
		<div class="icon">
			<Info />
		</div>

		<div class="horiz_line"></div>
	</div>

	<div class="content">
		<div class="line"></div>
		<div class="slot">
			<p>{title}</p>
			<slot />
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

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
		background-color: #8ec07c;
		width: 0.1em;
		margin-left: 0.85em;
		margin-bottom: 1em;
		margin-top: 0.5em;
	}

	.horiz_line {
		background-color: #8ec07c;
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
