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
		padding-top: 2rem;
		padding-left: 2rem;
		padding-right: 2rem;
	}

	.section h3 {
		font-family: 'Bebas Neue';
		font-style: normal;
		font-weight: 400;
		font-size: 3rem;
		line-height: 3.625rem;
		margin-bottom: 0rem;
		margin-top: 0rem;
	}

	.section hr {
		width: 35.625rem;
		margin-left: 0rem;
		margin-top: 1.25rem;
		height: 0.022rem;
		max-width: 80vw;
	}

</style>
