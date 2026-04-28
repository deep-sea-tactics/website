<script>
	import Section from '$lib/section/Section.svelte';
</script>


	
	


<Section header="Importance Of Software Engineering">
	<p>
		Deep Sea Tactics' Software team works to create software that helps solve the complex problems presented
		by the MATE ROV challenge. Coding is a central piece of modern-day problem-solving, and we aim
		to create software solutions that meet and surpass the ROV requirements.
		 By working on our software team, members learn importand and valuable 21st Century skills that can be applied in almost every STEM field.
	</p>
</Section>

<style>
	.buttonWrap {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
	.button {
		background: var(--blue);
		color: var(--textColor2);
		border-radius: 3px;
		margin: 10px;
		padding: 10px 20px;
		text-decoration: none;
		font-family: 'Encode Sans Variable', sans-serif;
		font-style: normal;
		font-weight: bold;
		position: relative;
	}
	.button::after {
		content: '';
		top: 0px;
		left: 0px;
		position: absolute;
		height: 100%;
		width: 100%;
		z-index: 2;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s;
		background: white;
		opacity: 0;
	}
	.button:hover::after {
		opacity: 0.3;
	}
</style>
