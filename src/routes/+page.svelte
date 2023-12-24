<script lang="ts">
    const images = import.meta.glob('../images/*', { as: 'url', eager: true })

    console.log(images)
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
		height: calc(100vh - 88px);
        flex-direction: column;
        justify-content: space-between;
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
        color: #3B82F6;
    }

    .images {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 0.5rem;
        overflow-x: hidden;
    }

    img {
        height: 220px;
		object-fit: cover;
    }
</style>