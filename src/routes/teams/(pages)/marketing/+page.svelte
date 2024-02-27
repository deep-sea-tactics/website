<script lang="ts">
	// placeholder images, will be replaced #l8er
	import kitty from '../../../../images/home/dst-kitty.jpg?enhanced';
	import TeamLayout from '../TeamLayout.svelte';
</script>

<TeamLayout teamName="Marketing" mediaURLs={[kitty]}>
	<br>
	<p><h3>We are in charge of...</h3>
	<ul>
		<li>
			Sponsorships
		</li>
		<li>Financing and making sure we meet our budget
		<li>
			Making and maintaining a budget
		</li>
		<li>Monitoring team safety</li>
		<li>Documenting team progress</li>
		<li>Managing social media</li>
		<li>Presenting the team during events</li>
	</ul>
	<p><h4>Our goal is to</h4>
</TeamLayout>

<style>
	a {
		color: var(--accent);
	}
</style>
