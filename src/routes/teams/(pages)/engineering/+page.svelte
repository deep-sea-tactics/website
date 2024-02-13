<script lang="ts">
	// placeholder images, will be replaced #l8er
	import Fun from '../../../../images/home/dst-point.jpg?enhanced';
	import TeamLayout from '../TeamLayout.svelte';
</script>

<TeamLayout teamName="Engineering" mediaURLs={[Fun]}>
	<br>
	<p><h3>We are responsible for...</h3>
	<ul>
		<li>
			Simulations for e2e testing with <a href="https://playwright.dev/">Playwright</a>,
			<a href="https://threlte.xyz/">Threlte</a>, and <a href="https://rapier.rs/">Rapier</a>
		</li>
		<li>Thruster linearization for easy pilot use</li>
		<li>
			Unified codebase across repositories in
			<a href="https://www.typescriptlang.org/">TypeScript</a> &
			<a href="https://svelte.dev/">Svelte</a>
		</li>
		<li>Vector control stabilization</li>
		<li><a href="https://github.com/deep-sea-tactics/">Source-available across the board</a></li>
		<li>Giving back with Open Source R&D</li>
		<li>Helping our local community with free programming lessons</li>
	</ul>
	<p>Because our team asks one question: How can we help?</p>
</TeamLayout>

<style>
	a {
		color: var(--accent);
	}
</style>
