<script lang="ts">
	interface Image {
		src: string;
		width: number;
	}

	const images: Image[] = Object.values(
		import.meta.glob('../images/home/*', { as: 'url', eager: true })
	).map((url) => ({ src: url, width: 0 }));

	$: widthSum = images.reduce((acc, cur) => acc + cur.width, 0);
</script>

<header>
	<div />
	<div class="title">
		<h2>
			Innovation with an <span class="water">aquatic</span> edge
		</h2>
	</div>

	<div class="images-container">
		<div class="images" style="--widthSum: -{widthSum}px;">
			<!-- TODO: Alt descriptions, unstretch images -->
			{#each Object.values(images) as image}
				<div class="image" bind:clientWidth={image.width}>
					<img src={image.src} />
				</div>
			{/each}
			{#each Object.values(images) as image}
				<div class="image">
					<img src={image.src} />
				</div>
			{/each}
		</div>
	</div>
</header>
<!-- WIP
<main>
	<p>We make ROVs for the MATE competition, and we meet every Tuesday at 2 PM.</p>
</main>
-->
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
		background: linear-gradient(to right, #0151c1, var(--accent));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.images-container {
		width: 100%;
		overflow: hidden;
	}

	.images {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		animation: slideshow 90s linear infinite;
		width: 200%;
		flex-wrap: nowrap;
		margin: 1rem;
	}

	.image {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
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

	@keyframes slideshow {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(var(--widthSum, 0));
		}
	}
</style>
