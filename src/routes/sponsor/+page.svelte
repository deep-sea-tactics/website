<script lang="ts">
	interface SponsorCategory {
		name: string;
		money: number;
		color: string;
		textColor?: string;
	}

	const sponsorCategories: SponsorCategory[] = [
		{
			name: 'Diamond Sponsors',
			money: 5000,
			color: '#3B82F6'
		},
		{
			name: 'Gold Sponsors',
			money: 2500,
			color: '#E8C547'
		},
		{
			name: 'Silver Spnsors',
			money: 1000,
			color: '#C2DFE3',
			textColor: 'black'
		},
		{
			name: 'Bronze Sponsors',
			money: 500,
			color: '#FC7753'
			// #FC7753
		},
		{
			name: 'Honorable Mentions',
			money: 100,
			color: '#717568'
		}
	];
</script>

<svelte:head>
	<title>Deep Sea Tactics - Sponsors</title>
</svelte:head>

<h1>Sponsors</h1>

<main>
	{#each sponsorCategories as sponsorCategory}
		<div
			class="sponsorCategory"
			style="--color: {sponsorCategory.color}; --textColor: {sponsorCategory.textColor};"
		>
			<h2>{sponsorCategory.name} - ${sponsorCategory.money}</h2>
		</div>
	{/each}
</main>

<style>
	h1,
	h2 {
		text-align: center;
	}

	h1 {
		font-size: 6rem;
	}

	h2 {
		font-size: 3rem;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.sponsorCategory {
		background-color: var(--color);
		margin: 1rem;
		width: 800px;
		color: var(--textColor, white);
		padding: 1rem;
		border-radius: 1rem;
	}
</style>
