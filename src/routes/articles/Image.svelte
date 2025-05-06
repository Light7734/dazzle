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
        margin-left: auto;
        margin-right: auto;
		background-color: #1d2021;
		padding: 1em;
		border: 1px solid #928374;
		border-radius: 2px;
		display: flex; /* Arrange images horizontally */
		/* Removed flex properties from here */
        gap: 1em;
	}

</style>
