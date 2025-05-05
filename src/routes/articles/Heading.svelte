<script lang="ts">
	import './article.css';
	import HorizontalBreak from './HorizontalBreak.svelte';

	export let title;
	export let date;
</script>

<div class="heading">
	<h1>{title}</h1>
	<p>{date}</p>
</div>
<HorizontalBreak />

<style>
	.heading {
		width: 100%;
	}

	.heading > h1 {
		display: inline-block;
	}

	.heading > p {
		float: right;
		padding-left: auto;
		padding-right: auto;
		margin-left: auto;
		margin-right: auto;
	}
</style>
