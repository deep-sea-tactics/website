<svelte:head>
    <title>Deep Sea Tactics - Teams</title>
</svelte:head>

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
