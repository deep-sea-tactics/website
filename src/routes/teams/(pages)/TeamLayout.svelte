<script lang="ts">
	export let teamName: string;
	export let mediaURLs: string[] = [];
</script>

<main>
	<div class="information">
		<h2>{teamName}</h2>
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

	h2 {
		text-align: center;
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
		scale: 1;
		transition: scale 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.image:hover {
		scale: 0.97;
	}
</style>
