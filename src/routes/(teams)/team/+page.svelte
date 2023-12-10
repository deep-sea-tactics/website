<script>
	import { title } from '$lib/Jumbotron.svelte';

	$title = 'Deep Sea Tactics Teams';

	const teams = ['Engineering', 'Electrical', 'Software', 'Design', 'Marketing'];
</script>

<main>
	<h1>Teams</h1>

	<p>Deep Sea Tactics is split into five teams:</p>

	<ul>
		{#each teams as team}
			<li>
				<a href={`/${team.toLowerCase()}`}>{team}</a>
			</li>
		{/each}
	</ul>
</main>

<style>
	main {
		margin: 1rem;
	}
</style>
