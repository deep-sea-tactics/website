<script>
	export let img = '/images/jumbotron.png';
	export let title = "Landstown High School's innovative underwater robotics team.";
</script>

<div class="jumbotron" role="banner" style="background-image: url('{img}')">
	<div class="inner">
		<h2>{title}</h2>
	</div>
	
</div>

<style>
	.jumbotron {
		background-size: cover;
		background-position: center;
		height: 25.6504rem;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.inner {
		width: 90%;
		height: 100%;
	}

	.jumbotron h2 {
		font-family: 'Roboto';
		color: white;
		font-weight: 600;
		line-height: 3.75rem;
		font-size: 2.4rem;
		max-width: 42.75rem;
		font-style: normal;

		/* position as in prototype, which is not yet finalized. */
		position: relative;
		top: 3.5rem;
		left: 1.95rem;
	}

	@media screen and (max-width: 50.313rem) {
		.jumbotron {
			height: 18.75rem;
		}
		.jumbotron h2 {
			font-size: 1.5rem;
			line-height: 1.75rem;
			top: 2.5rem;
		}
	}
</style>
