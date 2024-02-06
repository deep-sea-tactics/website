<script lang="ts">
	// placeholder images, will be replaced #l8er
	import RPIConfig from '../../../../images/home/rpi-config.jpg?enhanced';
	import DSTKitty from '../../../../images/home/dst-kitty.jpg?enhanced';
	import RobotInWater from '../../../../images/home/robot-in-water.jpg?enhanced';
	import TeamLayout from '../TeamLayout.svelte';
</script>

<TeamLayout teamName="Marketing" mediaURLs={[RPIConfig, DSTKitty, RobotInWater]}>
	<p> The marketing team is responsible for getting sponsors to support our budget. </p>
	<ul>
		<li>
            Design guards for thrusters
		</li>
        <li>
        Float design		
        </li>
	</ul>
	<p>Because our team asks one question: How can we help?</p>
</TeamLayout>

<style>
	a {
		color: var(--accent);
	}
</style>
