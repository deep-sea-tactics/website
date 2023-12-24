<script lang="ts">
	export let header: string;

	type BrandColor = '#f2f2f2' | '#2C3289';
	export let backgroundColor: BrandColor | string = '#f2f2f2';
	const color = backgroundColor === '#f2f2f2' ? '000000' : '#f2f2f2';

	export let src = ""
	export let alt = header;
	export let reverseSections = false;
	
</script>

<div
	class="section"
	style="background-color: {backgroundColor}; color: {color}"
	role="region"
	aria-label={header}
>
	<div class="inner">

		{#if !reverseSections}
			<div class="header">
				<h3>{header}</h3>
				<hr style="background-color: {color};" />
			</div>
			<div class="subSections">
				<div class="left lr">
					<slot />
				</div>
				{#if src}
					<div class="right lr">
							<img class="image" src={src} alt={alt}>
					</div>
				{/if}
			</div>
		{:else}
		<div class="reversedHeader">
			<div class="header">
				<h3>{header}</h3>
				<hr style="background-color: {color};" />
			</div>
		</div>
		
		
			<div class="subSections">
				{#if src}
					<div class="right lr">
							<img class="image" src={src} alt={alt}>
					</div>
				{/if}
				<div class="left lr">
					<slot />
				</div>
				
			</div>
		{/if}
			
	</div>
</div>

<style>
	.section {
		width: 100%;
		padding: 20px 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.subSections {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: start;
		justify-content: center;
		height: 100%;
		flex-wrap: wrap;
	}
	.reversedHeader {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: end;
		text-align: end;
	}
	.inner {
		width: 95%;
		display: flex;
		flex-direction: column;
	}
	.image {
		height: 100%;
		width: 100%;
		flex-shrink: 1;
		border: 2px solid var(--blue);
		border-radius: 5px;
	}
	.lr {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.left {
		min-width: 300px;
		width: 100%;
		display: flex;
		flex-shrink: 1;
		width: 50%;
		flex-grow: 1;
		align-items: center;
		justify-content: center;
		
	}
	.right {
		min-width: 300px;
		max-width: 500px;
		width: 100%;
		height: 100%;
		padding: 25px;
		box-sizing: border-box;
		
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
		margin-top: 0rem;
		height: 0.018rem;
		max-width: 80vw;
	}

	@media screen and (max-width: 50.313rem) {
		.section hr {
			width: 100%;
		}
	}
</style>
