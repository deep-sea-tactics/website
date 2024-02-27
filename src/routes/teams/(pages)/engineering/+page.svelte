<script lang="ts">
	// placeholder images, will be replaced #l8er
	import Fun from '../../../../images/home/dst-point.jpg?enhanced';
	import TeamLayout from '../TeamLayout.svelte';
</script>

<TeamLayout teamName="Engineering" mediaURLs={[Fun]}>
	<br>
	<p><h3>We are in charge of...</h3>
	<ul>
		<li>
			Configuring the mechanical parts of the robot
		</li>
		<li>
			Making the robot functional
		</li>
			
		<li>
			Working with rasperry PI and/or Arudino
		</li>
		<li>
			The motors of the robot and the Float
		</li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
	<p>Our goal is to</p>
</TeamLayout>

<style>
	a {
		color: var(--accent);
	}
</style>
