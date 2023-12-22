<script>
	import { title } from '$lib/Jumbotron.svelte';

	$title = 'Deep Sea Tactics Teams';

	const teams = ['Engineering', 'Electrical', 'Software', 'Design', 'Marketing'];
</script>

<main>
	<h1>Teams</h1>

	<p>Deep Sea Tactics is split into five teams:</p>

	<div class="teamWrap">
		{#each teams as team}
		<a class="team" href="/{team.toLowerCase()}">
			<img src="/icons/teams/{team.toLowerCase()}.svg" alt={team}>
			<p>{team}</p>
		</a>
		{/each}
	</div>
</main>

<style>
	main {
		margin: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	h1 {
		margin: 0px;
	}
	.teamWrap {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		width: 80%;
	}
	.team {
		width: 300px;
		border-radius: 25px;
		padding: 25px;
		display: flex;
		flex-direction: column;
		align-items: center;
		aspect-ratio: 1/1;
		box-sizing: border-box;
		text-decoration: none;
		color: var(--text);
	}
	.team:hover {
		background: var(--secondary);
	}
	.team p {
		margin: 0px;
		color: var(--text);
		text-decoration: none;
	}
	.team img {
		width: 200px;
	}
</style>
