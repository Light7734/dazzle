<script lang="ts">
	export let paths: string[] = [];
	export let caption: string = '';
</script>

<div class="container">
		{#each paths as path (path)}
			<img src={path} alt="" />
		{/each}
</div>

<style>
	.container {
        width: fit-content;
        margin-right: auto;
		padding: 1em;
		/* Removed flex properties from here */
        gap: 1em;
	}

</style>
