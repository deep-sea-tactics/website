<script lang="ts">
	const images = import.meta.glob('../images/*', { as: 'url', eager: true });
</script>

<header>
	<div />
	<div class="title">
		<h2>
			Innovation with an <span class="water">aquatic</span> edge
		</h2>
	</div>

	<div class="images">
		<!-- TODO: Alt descriptions, unstretch images -->
		{#each Object.values(images) as image}
			<div class="image">
				<img src={image} alt="placeholder" />
			</div>
		{/each}
	</div>
</header>

<main>
	<!-- TODO: Our main content goes here -->
</main>

<footer>
	<!-- TODO: Our footer content goes here -->
</footer>

<style>
	header {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
        height: calc(100vh - 112px);
	}

	.title {
		margin-left: auto;
		margin-right: auto;
		display: flex;
		max-width: 1024px;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	h2 {
		max-width: 800px;
		font-size: 5rem;
		font-weight: 700;
	}

	.water {
		color: var(--accent);
		transition: filter 0.4s cubic-bezier(0.075, 0.82, 0.165, 1)
	}

	.water:hover {
        filter: drop-shadow(0px 0px 5px #4444dd);

	}

	.images {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		gap: .5rem;
		overflow-x: hidden;
	}

	img {
		height: 220px;
		object-fit: cover;
        overflow: hidden;
        border-radius: 1rem;
        box-sizing: border-box;
        scale: 1;
        transition: scale 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
        background-color: var(--accent);
        background-blend-mode: screen;
	}

    img:hover {
        scale: 0.975;
    }

	
</style>
