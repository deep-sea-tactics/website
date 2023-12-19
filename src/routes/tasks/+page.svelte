<script lang="ts">
	import { title } from '$lib/Jumbotron.svelte';
	import Section from '$lib/section/Section.svelte';

	$title = 'Tasks';
</script>

<Section header = "Coding Tasks"> 
	<ul>
		<li>Simulation</li>
		<li>Local Development Setup</li>
		<li>Float</li>
	</ul>
</Section>
<Section header = "Marketing Tasks"> 
	<ul>
		<li>3 Sponsors</li>
		<li>T-shirt design</li>
		<li>Work on tiers</li>
	</ul>
</Section>
<Section header = "Engineering Tasks"> 
	<ul>
		<li>ROV</li>
	</ul>
</Section>
<Section header = "Design Tasks"> 
	<ul>
		<li>ROV Basics</li>
		<li>Practicing design skills with basic body</li>
	</ul>
</Section>
<Section header = "Electrical Tasks"> 
	<ul>
		<li>ROV Basics</li>
	</ul>
</Section>
<br>