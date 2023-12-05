<script lang="ts">
	import { title } from '$lib/Jumbotron.svelte';
	import Section from '$lib/section/Section.svelte';
	import Donate from '$lib/section/Donate.svelte';

	$title = 'Sponsors';
</script>

<main>
	<h1>Sponsors</h1>

	<Section header="Sponsors">
		<h2 class="diamond">Diamond Sponsor ($5,000+)</h2>
		<h2 class="gold">Gold Sponsor ($2,500+)</h2>
		<h2 class="silver">Silver Sponsor ($1,000+)</h2>
		<h2 class="bronze">Bronze Sponsor ($500+)</h2>
		<h2 class="other">Honorable Mentions</h2>
	</Section>
</main>

<Donate />

<style>
	main {
		margin: 1rem;
	}

	h2 {
		margin: 4rem 0;
		text-align: center;
	}

	h2.diamond {
		color: lightblue;
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
