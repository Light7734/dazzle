<script lang="ts">
	import './article.css';
	import Heading from './Heading.svelte';

	export let title;
	export let date;

</script>

<div class="container">
	<div class="padding"></div>

	<div class="body">
		<Heading {title} {date} />
		<slot></slot>
	</div>

	<div class="padding"></div>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.container {
    background-color: #1d2021;
    display: flex;
}

.body {
    flex: 3;
    padding: 1em;
    background-color: #282828;
    text-wrap-mode: wrap;

    min-width: 80ch;
    max-width: 80ch;

    border-left: 1px solid #928374;
    border-right: 1px solid #928374;

    text-align: justify;

}

.padding {
    flex: 1;
}

</style>
