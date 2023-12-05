<script lang="ts">
	import { title } from '$lib/Jumbotron.svelte';

	$title = '';
</script>

<main>
	<slot />
</main>

<style>
	main {
		margin: 1rem;
	}
</style>
