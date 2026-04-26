<script lang="ts">
	import { title } from '$lib/Jumbotron.svelte';
	import Donate from '$lib/section/Donate.svelte';

	$title = 'Sponsors';

	interface Sponsor {
		tier: string;
		money?: string;
		noSponsor?: boolean;
	}

	const sponsors: Sponsor[] = [
		{
			tier: 'Diamond',
			money: '2,500+',
		},
		{
			tier: 'Gold',
			money: '$1,500+',
		},
		{
			tier: 'Silver',
			money: '$750+',
		},
		{
			tier: 'Bronze',
			money: '$250+',
		},
		
	];
</script>

<main>
	{#each sponsors as sponsor}
		<div class="container">
			<h2 class={sponsor.tier.toLowerCase()}>
				{sponsor.tier} 
				{#if !sponsor.noSponsor}
					Sponsors
				{/if}
				{#if sponsor.money}
					({sponsor.money})
				{/if}
			</h2>
		</div>
	{/each}
</main>

<Donate />

<style>
	main {
		margin: 1rem;
	}

	h2 {
		margin: 4rem 0;
		text-align: center;
		padding: 1rem;
		border-radius: 1rem;
		font-family: 'Bebas Neue', sans-serif;
		font-size: 3.5rem;
	}

	.container {
		display: flex;
		justify-content: center;
	}

	h2.diamond {
		color: #00a0ff;
	}

	h2.gold {
		color: gold;
	}

	h2.silver {
		color: silver;
	}

	h2.bronze {
		color: #cd7f32;
	}
</style>
