<script lang="ts">
	export let header: string;

	type BrandColor = '#f2f2f2' | '#2C3289';
	export let backgroundColor: BrandColor = '#f2f2f2';
	const color = backgroundColor === '#f2f2f2' ? '000000' : '#f2f2f2';
</script>

<div
	class="section"
	style="background-color: {backgroundColor}; color: {color}"
	role="region"
	aria-label={header}
>
	<h3>{header}</h3>
	<hr style="background-color: {color};" />
	<slot />
</div>

<style>
	.section {
		padding-top: 2em;
		padding-left: 2em;
	}

	.section h3 {
		font-family: 'Bebas Neue';
		font-style: normal;
		font-weight: 400;
		font-size: 48px;
		line-height: 58px;
		margin-bottom: 0px;
		margin-top: 0px;
	}

	.section hr {
		width: 570px;
		margin-left: 0px;
		margin-top: 20px;
		height: 0.35px;
		max-width: 80vw;
	}
</style>
