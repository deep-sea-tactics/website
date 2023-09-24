<script>
	import Section from './Section.svelte';
</script>

<div id="about">
	<Section header="About" backgroundColor="#f2f2f2">
		<p>
			We are students from varied backgrounds with a shared passion for innovation and a bright
			future. Together, we bring different skills, creative ideas, and perspectives to the table,
			helping us address the world's challenges with innovative solutions. We are unafraid to think
			big, take bold risks, and learn from our mistakes. As the change-makers of tomorrow, we are
			committed to shaping a better world. <a class="button" href="/about">Learn More</a>
		</p>
	</Section>
</div>

<style>
	p {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 1.25rem;
		line-height: 1.502;
		margin-right: 0.15rem;
		margin-bottom: 0;
	}
	.button {
		color: var(--blue);
		text-decoration: none;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: bold;
		position: relative;
	}
	.button::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 2px;
		left: 0px;
		bottom: 0px;
		transition: all 0.2s ease-in-out;
		background-image: linear-gradient(
			90deg,
			var(--blue) 0%,
			var(--blue) 50%,
			transparent 50%,
			transparent 100%
		);
		background-size: 200%;
		background-position: 100%;
	}
	.button:hover::after {
		background-position: 0%;
	}
</style>
