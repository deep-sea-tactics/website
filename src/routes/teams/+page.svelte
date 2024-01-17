<script lang="ts">
	import Team from './TeamCircle.svelte';

	interface Team {
		name: string;
		color: string;
		image: string;
	}

	const teams: Team[] = [
		{
			name: 'Software',
			color: '#3a97ff',
			image: '/teams/software.jpg'
		},
		{
			name: 'Engineering',
			color: '#ff4242',
			image: '/teams/engineering.png'
		},
		{
			name: 'Electrical',
			color: '#ffb400',
			image: '/teams/electrical.png'
		},
		{
			name: 'Design',
			color: '#7fb800',
			image: '/teams/design.png'
		},
		{
			name: 'Marketing',
			color: '#9000B3',
			image: '/teams/marketing.jpg'
		}
	];
</script>

<svelte:head>
	<title>Deep Sea Tactics - Teams</title>
</svelte:head>

<div class="wrapper">
	<main>
		{#each teams as team}
			<Team {...team} />
		{/each}
	</main>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 3rem;
	}

	main {
		margin: 1rem;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		letter-spacing: 0.2rem;
		height: calc(100% - 112px);
		width: calc(310px * 3 + 2rem * 3 + 10px * 3 + 100px);
	}
</style>
