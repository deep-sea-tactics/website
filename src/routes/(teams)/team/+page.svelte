<script lang="ts">
	import { title } from '$lib/Jumbotron.svelte';
	import { Circle } from 'svelte-text-path';

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
			<div class="team" style="--bg: {team.color};">
				<div class="circle">
					<Circle>
						{@html team.name + "&nbsp;".repeat(20) + team.name + "&nbsp;".repeat(20)}
					</Circle>
				</div>
				<a class="icon" href="/{team.name.toLowerCase()}">
					<img src="/icons/teams/{team.name.toLowerCase()}.svg" alt="{team.name} Logo" />
				</a>
			</div>
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
		font-family: 'Bebas Neue', sans-serif;
		letter-spacing: 0.2rem;
	}

	.team {
		margin: 1rem;
		border: 5px solid var(--bg);
		border-radius: 50%;
		width: 310px;
		height: 310px;
		aspect-ratio: 1 1/ 1;
	}

	.icon {
		position: relative;
		top: -50%;
		left: 50%;
		display: inline-block;
		transform: translate(-50%, -30%);
		padding: 2rem;
		border-radius: 50%;
		background-color: var(--bg);
		transition: all 0.2s ease-in-out;
	}

	.icon:hover {
		transform: translate(-50%, -30%) scale(1.1);
	}

	.circle {
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: calc(100% - 2rem);
		height: calc(100% - 2rem);
	}
</style>
