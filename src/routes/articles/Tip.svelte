<script lang="ts">
	export let text;
</script>

<div class="tooltip">
	{text}
	<span class="tooltiptext"><slot /></span>
</div>

<style>
	.tooltip {
		position: relative;
		display: inline-block;
		
        font-weight: 600;
        font-style: italic;
        color: #fabd2f;
        border-bottom: .5px solid #d79921;
	}

	/* Tooltip text */
	.tooltip .tooltiptext {
		visibility: hidden;

		max-width: 60ch;
		min-width: 60ch;
		margin-left: -30ch; /* Use half of the width (120/2 = 60), to center the tooltip */
        margin-top: .5em;

		background-color: #282828ea;
		text-wrap-mode: wrap;
		text-align: justify;
        padding: 1em;
		border-radius: 6px;
        border: 1px solid #928374;

		top: 100%;
		left: 50%;

		/* Position the tooltip text - see examples below! */
		position: absolute;
		z-index: 1;
	}

	/* Show the tooltip text when you mouse over the tooltip container */
	.tooltip:hover .tooltiptext {
		visibility: visible;
	}
</style>
