<script lang="ts">
	// placeholder images, will be replaced #l8er
	import RPIConfig from '../../../../images/home/rpi-config.jpg?enhanced';
	import DSTKitty from '../../../../images/home/dst-kitty.jpg?enhanced';
	import RobotInWater from '../../../../images/home/robot-in-water.jpg?enhanced';
	import TeamLayout from '../TeamLayout.svelte';
</script>

<TeamLayout teamName="Software" mediaURLs={[RPIConfig, DSTKitty, RobotInWater]}>
	<p>We make sure the ROV can do its job by programming it to do specific tasks, and we carry out the mission.</p>
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
