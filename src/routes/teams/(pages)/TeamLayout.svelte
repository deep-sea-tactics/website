<script lang="ts">
	export let weStatements: string[] = [];
	export let mediaURLs: string[] = [];
</script>

<h2>On the software team:</h2>
<ul>
	{#each weStatements as weStatement}
		<li>{weStatement}</li>
	{/each}
</ul>

<div class="mediaDiv">
	{#each mediaURLs as mediaURL}
		<enhanced:img src={mediaURL} class="mediaItem" />
	{/each}
</div>

<style>
	.mediaItem {
		width: 20rem;
		height: auto;
	}
</style>
