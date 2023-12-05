<script lang="ts">
	import { title } from '$lib/Jumbotron.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$title = 'Deep Sea Tactics Blog';
</script>

<div class="posts">
	{#each data.posts as { slug, name, description, author }}
		<div class="post">
			<h2><a href={slug}>{name}</a></h2>
			<h3 class="description">{description}</h3>
			<h3 class="author">By {author}</h3>
		</div>
	{/each}
</div>

<style>
	.posts {
		margin: 2rem;
		display: flex;
	}

	.post {
		background-color: white;
		border-radius: 1rem;
		padding: 1rem;
		margin: 1rem;
	}
</style>
