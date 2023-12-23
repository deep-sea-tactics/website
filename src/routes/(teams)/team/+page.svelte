<script lang="ts">
	import { title } from '$lib/Jumbotron.svelte';
	import { Circle } from 'svelte-text-path';
	import Team from './Team.svelte';

	$title = 'Deep Sea Tactics Teams';

	interface Team {
		name: string;
		color: string;
	}

	const teams: Team[] = [
		{
			name: 'Engineering',
			color: '#ff4242'
		},
		{
			name: 'Electrical',
			color: '#ffb400'
		},
		{
			name: 'Software',
			color: '#3a97ff'
		},
		{
			name: 'Design',
			color: '#7fb800'
		},
		{
			name: 'Marketing',
			color: '#9000B3'
		}
	];
</script>

<div class="wrapper">
	<main>
		{#each teams as team}
			<Team name={team.name} color={team.color} />
		{/each}
	</main>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 3rem;
	}

	main {
		margin: 1rem;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		max-width: calc((310px * 3) + 6rem + (5px * 6));
		letter-spacing: 0.2rem;
	}
</style>
