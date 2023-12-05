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
			money: '$5,000+',
		},
		{
			tier: 'Gold',
			money: '$2,500+',
		},
		{
			tier: 'Silver',
			money: '$1,000+',
		},
		{
			tier: 'Bronze',
			money: '$500+',
		},
		{
			tier: 'Honorable Mentions',
			noSponsor: true,
		},
	];
</script>

<main>
	<h1>Sponsors</h1>

	{#each sponsors as sponsor}
		<div class="container">
			<h2 class={sponsor.tier.toLowerCase()}>
				{sponsor.tier} 
				{#if !sponsor.noSponsor}
					Sponsor
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

	h1 {
		margin-top: 3rem;
		text-align: center;
	}

	h2 {
		margin: 4rem 0;
		text-align: center;
		padding: 1rem;
		border-radius: 1rem;
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
