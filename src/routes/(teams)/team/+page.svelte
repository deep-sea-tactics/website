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
			<a class="team" style="--bg: {team.color};" href="/{team.name.toLowerCase()}">
				<div class="circle">
					<Circle>
						{@html team.name + "&nbsp;".repeat(20) + team.name + "&nbsp;".repeat(20)}
					</Circle>
				</div>
				<div class="icon" >
					<div class="iconBG">

					</div>
					<img src="/icons/teams/{team.name.toLowerCase()}.svg" alt="{team.name} Logo" />
				</div>
			</a>
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

	.team {
		position: relative;
		margin: 1rem;
		border: 5px solid var(--bg);
		border-radius: 50%;
		width: 310px;
		height: 310px;
		aspect-ratio: 1 1/ 1;
	}

	.icon {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0px;
		top: 0px;
		display: flex;
		align-items: center;
		justify-content: center;
		
	}

	.icon img {
		width: 25%;
		
		position: relative;
	}
	.iconBG {
		width: 25%;
		position: absolute;
		background: var(--bg);
		height: 25%;
		padding: 2rem;
		border-radius: 50%;

	}

	.circle {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
	}
	.team:hover {
		scale: 1.1;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
	}
	.team:hover .circle {
		animation: rotate infinite linear 5s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		
	}

	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
