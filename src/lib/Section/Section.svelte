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
		padding-top: 1.6rem;
		padding-left: 2.7rem;
		padding-right: 2.7rem;
	}

	.section h3 {
		font-family: 'Bebas Neue';
		font-style: normal;
		font-weight: 400;
		font-size: 2.4rem;
		line-height: 3.625rem;
		margin-bottom: 0rem;
		margin-top: 0rem;
	}

	.section hr {
		width: 28.5rem;
		margin-left: 0rem;
		margin-top: 1rem;
		height: 0.018rem;
		max-width: 80vw;
	}

	@media screen and (max-width: 50.313rem) {
		.section {
			padding-left: 1.6rem;
			padding-right: 1.6rem;
		}

		.section hr {
			width: 100%;
		}
	}
</style>
