<script lang="ts">
	// placeholder images, will be replaced #l8er
	import RPIConfig from '../../../../images/home/rpi-config.jpg?enhanced';
	import DSTKitty from '../../../../images/home/dst-kitty.jpg?enhanced';
	import RobotInWater from '../../../../images/home/robot-in-water.jpg?enhanced';
	import TeamLayout from '../TeamLayout.svelte';
</script>

<TeamLayout
	weStatements={[
		"We meticulously code the operations of the ROV.",
		'We intricately program the profiling float.',
		'We continuously update and manage the content on the official website.',
		'We conduct sophisticated simulations to optimize ROV performance.',
		'We intelligently implement bleeding edge tools.'
	]}
    teamName="Software"
	mediaURLs={[RPIConfig, DSTKitty, RobotInWater]}
/>
