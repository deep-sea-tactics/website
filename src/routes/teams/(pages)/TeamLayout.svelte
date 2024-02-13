<script lang="ts">
	export let teamName: string;
	export let mediaURLs: string[] = [];
</script>

<main>
	<div class="information">
		
		<h1>{teamName}</h1>
		<slot />
	</div>
	<!-- todo implement vertical gallery -->
	<div class="gallery">
		<div>
			{#each mediaURLs as mediaURL}
				<enhanced:img src={mediaURL} class="image" />
			{/each}
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 0 1rem;
	}

	h1 {
		text-align: left;
		font-style: italic;
		
		
		
	}

	.information {
		flex: 1;
		margin: 1rem;
	}

	.gallery {
		flex: 1;
	}

	.image {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		scale: .8;
		transition: scale 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.image:hover {
		scale: .85;
	}
</style>
