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
	<div class="value" style="border-left: 5px solid {color}">
		<h3 style="color: {color}">{value}</h3>
	</div>
</div>

<style>
	.wrapper {
		border-radius: 49px;
		min-height: 108px;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0 3em;
		margin-right: 3em;
		margin-top: 1em;
		margin-bottom: 1em;
	}

	.key {
		height: 100%;
		display: flex;
		align-items: center;
		padding-right: 2.5em;
	}

	.value {
		min-height: inherit;
		display: flex;
		align-items: center;
		padding-left: 2em;
		word-break: break-word;
	}

	.value h3 {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 40px;
		line-height: 150.19%;
		margin-bottom: 0px;
		margin-top: 0px;
	}

	/* become horizontal on mobile */
	@media screen and (max-width: 1000px) {
		.wrapper {
			flex-direction: column;
			height: auto;
			padding: 1em;
			margin-right: 2em;
		}

		.key {
			padding: 1em;
		}

		.value {
			border-left: none !important;
			border-top: 2.55px solid var(--color);
			padding: 1em;
			word-break: break-all;
		}
	}
</style>
