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
		min-height: 5.4rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0 2.4rem;
		margin-right: 2.4rem;
		margin-top: .8rem;
		margin-bottom: .8rem;
	}

	.key {
		height: 100%;
		display: flex;
		align-items: center;
		padding-right: 2rem;
	}

	.value {
		min-height: inherit;
		display: flex;
		align-items: center;
		padding-left: 1.6rem;
		word-break: break-word;
	}

	.value h3 {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 1.5rem;
		line-height: 150.19%;
		margin-bottom: 0rem;
		margin-top: 0rem;
	}

	/* become horizontal on mobile */
	@media screen and (max-width: 62.5rem) {
		.wrapper {
			flex-direction: column;
			height: auto;
			padding: .8rem;
			margin-left: auto;
			margin-right: auto;
		}

		.key {
			padding: .8rem;
		}

		.value {
			border-left: none !important;
			border-top: 0.127rem solid var(--color);
			padding: 0.8rem;
		}
	}
</style>
