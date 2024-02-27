<script lang="ts">
	// placeholder images, will be replaced #l8er
	import RPIConfig from '../../../../images/home/rpi-config.jpg?enhanced';
	import TeamLayout from '../TeamLayout.svelte';
</script>

<TeamLayout teamName="Software" mediaURLs={[RPIConfig]}>
	<br>
	<p><h3>We are in charge of...</h3>
	<ul>
		<li>
			Making Simulations for e2e testing with <a href="https://playwright.dev/">Playwright</a>,
			<a href="https://threlte.xyz/">Threlte</a>, and <a href="https://rapier.rs/">Rapier</a>
		</li>
		<li>Thruster linearization for easy pilot use</li>
		<li>
			Unifiying codebase across repositories in
			<a href="https://www.typescriptlang.org/">TypeScript</a> &
			<a href="https://svelte.dev/">Svelte</a>
		</li>
		<li>Vector control stabilization</li>
		<li><a href="https://github.com/deep-sea-tactics/">Source-available across the board</a></li>
		<li>Giving back with Open Source R&D</li>
		<li>Helping our local community with free programming lessons</li>
		
		<comment> Theme color: #4285f4ff</comment>
	</ul>
	<p><h4>Our goal is to make sure the ROV can do its job, and we are responsible for carrying out the mission.</h4>
</TeamLayout>

<style>
	a {
		color: var(--accent);
	}
</style>
