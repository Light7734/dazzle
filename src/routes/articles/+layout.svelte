<script lang="ts">
	import './article.css';
	let { children } = $props();
</script>

<div class="body">
	<div class="article_padding"></div>

	<div class="article_body">
		{@render children()}
	</div>

	<div class="article_padding"></div>
</div>
