<script lang="ts">
	import './article.css';

	export let title;
	export let date;
</script>

<div>
	<h1>{title}</h1>
	<p>{date}</p>
</div>

<style>
	div {
		width: 100%;
	}

	h1 {
		display: inline-block;
	}

	p {
		float: right;
		padding-left: auto;
		padding-right: auto;
		margin-left: auto;
		margin-right: auto;
	}
</style>
