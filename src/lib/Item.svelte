<script lang="ts">
	type BrandColor = '#f2f2f2' | '#2C3289';
	export let backgroundColor: BrandColor = '#2C3289';
	const color = backgroundColor === '#f2f2f2' ? '#2c3289' : '#f2f2f2';
	export let value: string;
</script>

<div class="wrapper" style="background-color: {backgroundColor}; --color: {color}">
	<div class="key" style="color: {color};">
		<slot />
	</div>
	<div class="value" style="border-left: 0.313rem solid {color}">
		<h3 style="color: {color}">{value}</h3>
	</div>
</div>

<style>
	.wrapper {
		border-radius: 3.067rem;
		min-height: 6.75rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0 3rem;
		margin-right: 3rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	.key {
		height: 100%;
		display: flex;
		align-items: center;
		padding-right: 2.5rem;
	}

	.value {
		min-height: inherit;
		display: flex;
		align-items: center;
		padding-left: 2rem;
		word-break: break-word;
	}

	.value h3 {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 1.875rem;
		line-height: 150.19%;
		margin-bottom: 0rem;
		margin-top: 0rem;
	}

	/* become horizontal on mobile */
	@media screen and (max-width: 62.5rem) {
		.wrapper {
			flex-direction: column;
			height: auto;
			padding: 1rem;
			margin-left: auto;
			margin-right: auto;
		}

		.key {
			padding: 1rem;
		}

		.value {
			border-left: none !important;
			border-top: 0.159rem solid var(--color);
			padding: 1rem;
			word-break: break-all;
		}
	}
</style>
