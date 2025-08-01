<script lang="ts">
	import './articles/article.css';
	import Note from './articles/Note.svelte';
</script>

<div class="container">
	<div class="padding"></div>

	<div class="body">
		<p>
			We retain 10% of what we <strong>read</strong>, 20% of what we <strong>hear</strong>, 30% of
			what we <strong>see</strong>... but 90% of what we <strong>teach</strong> ! <br />

			Dazzle is an effort to <strong>solidify</strong> my understading of the complex world of
			computers. and to give back to the <strong>community</strong> 💖.
			<br />
			Please enjoy ;)
		</p>

		<h2 style:padding="0">The Graphics Pipeline</h2>
		<Note type="none" flow="true">
			<p>
				Article series covering the <strong>hows</strong> and <strong>whys</strong> of the
				<strong>Graphics Pipeline</strong>.
			</p>
		</Note>
		<Note type="resource" , title="Geometry Processing" flow="true">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue feugiat leo quis
				maximus. Sed id odio a velit hendrerit interdum efficitur quis enim. Morbi luctus lectus non
				ligula sagittis, vitae rutrum felis facilisis.
			</p>
		</Note>

		<Note type="resource" , title="Rasterization" flow="true">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue feugiat leo quis
				maximus. Sed id odio a velit hendrerit interdum efficitur quis enim. Morbi luctus lectus non
				ligula sagittis, vitae rutrum felis facilisis.
			</p>
		</Note>

		<Note type="resource" , title="Pixel Processing" flow="true">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue feugiat leo quis
				maximus. Sed id odio a velit hendrerit interdum efficitur quis enim. Morbi luctus lectus non
				ligula sagittis, vitae rutrum felis facilisis.
			</p>
		</Note>

		<Note type="resource" , title="Optimizations" flow="true">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue feugiat leo quis
				maximus. Sed id odio a velit hendrerit interdum efficitur quis enim. Morbi luctus lectus non
				ligula sagittis, vitae rutrum felis facilisis.
			</p>
		</Note>

		<h2 style:padding="0">Mathematics</h2>
		<Note type="none" flow="true">
			<p>
				Article series covering the <strong>hows</strong> and <strong>whys</strong> of the
				<strong>Graphics Pipeline</strong>.
			</p>
		</Note>
		<Note type="resource" , title="Linear Transformations" flow="true">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue feugiat leo quis
				maximus. Sed id odio a velit hendrerit interdum efficitur quis enim. Morbi luctus lectus non
				ligula sagittis, vitae rutrum felis facilisis.
			</p>
		</Note>
		<Note type="resource" , title="Trigonometry" flow="true">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue feugiat leo quis
				maximus. Sed id odio a velit hendrerit interdum efficitur quis enim. Morbi luctus lectus non
				ligula sagittis, vitae rutrum felis facilisis.
			</p>
		</Note>
		<Note type="resource" , title="Floating Points" flow="true">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue feugiat leo quis
				maximus. Sed id odio a velit hendrerit interdum efficitur quis enim. Morbi luctus lectus non
				ligula sagittis, vitae rutrum felis facilisis.
			</p>
		</Note>

		<h2 style:padding="0">Hardware Architecture</h2>
		<Note type="none" flow="true">
			<p>
				Article series covering the <strong>hows</strong> and <strong>whys</strong> of the
				<strong>Graphics Pipeline</strong>.
			</p>
		</Note>
		<Note type="resource" , title="Memory Architecture" flow="true">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue feugiat leo quis
				maximus. Sed id odio a velit hendrerit interdum efficitur quis enim. Morbi luctus lectus non
				ligula sagittis, vitae rutrum felis facilisis.
			</p>
		</Note>
		<Note type="resource" , title="GPU Architecture" flow="true">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue feugiat leo quis
				maximus. Sed id odio a velit hendrerit interdum efficitur quis enim. Morbi luctus lectus non
				ligula sagittis, vitae rutrum felis facilisis.
			</p>
		</Note>
		<Note type="resource" , title="CPU Architecture" flow="true">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue feugiat leo quis
				maximus. Sed id odio a velit hendrerit interdum efficitur quis enim. Morbi luctus lectus non
				ligula sagittis, vitae rutrum felis facilisis.
			</p>
		</Note>

		<h2 style:padding="0">Software Engineering</h2>
		<Note type="none" flow="true">
			<p>
				Article series covering the <strong>hows</strong> and <strong>whys</strong> of the
				<strong>Graphics Pipeline</strong>.
			</p>
		</Note>
		<Note type="resource" , title="Technical Debt Management" flow="true">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue feugiat leo quis
				maximus. Sed id odio a velit hendrerit interdum efficitur quis enim. Morbi luctus lectus non
				ligula sagittis, vitae rutrum felis facilisis.
			</p>
		</Note>
		<Note type="resource" , title="C++, intermediate to advanced" flow="true">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue feugiat leo quis
				maximus. Sed id odio a velit hendrerit interdum efficitur quis enim. Morbi luctus lectus non
				ligula sagittis, vitae rutrum felis facilisis.
			</p>
		</Note>
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

		min-width: 80ch;
		max-width: 80ch;
		text-wrap-mode: wrap;
		text-wrap-style: pretty;
		text-align: justify;

		border-left: 1px solid #92837420;
		border-right: 1px solid #92837420;
	}

	.padding {
		flex: 1;
	}
</style>
