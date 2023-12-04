<script>
	import Section from '$lib/section/Section.svelte';
</script>

<Section header="Coding Course">
	<p>
		Deep Sea Tactics is committed to inspiring future coders through our student-led JavaScript
		course. This outreach program teaches critical thinking and problem-solving skills and piques
		students' interest in the challenging yet exciting world of Deep Sea Tactics. We are delighted
		to share all the resources we use for our coding course. Please find them below. (Only VBCPS
		Students can view these)
	</p>
	<a
		class="button"
		target="_blank"
		href="https://docs.google.com/presentation/d/1fkmtj-kx0g3BmO6LpGQE1kT-BR0K0BkrRjAKGz8UFUY/edit?usp=sharing"
		>Day 1 Presentation</a
	>
	<a
		class="button"
		target="_blank"
		href="https://docs.google.com/presentation/d/1hFzDyHQYnNgS48k2M2PNZtbbVKK5jiLMvSDwyPQ8Xvk/edit?usp=sharing"
		>Day 2 Presentation</a
	>
	<a
		class="button"
		target="_blank"
		href="https://docs.google.com/presentation/d/1YggjZp9OtcKuCLOj_xPmk1b7rNvfhTdKo0cn4nE4Yr0/edit?usp=sharing"
		>Day 3 Presentation</a
	>
	<a
		class="button"
		target="_blank"
		href="https://docs.google.com/presentation/d/1Jbo_Iz_h0lxGNMfxmNmRs4cMNxIJvmsw6u-qfSG8Xzg/edit?usp=sharing"
		>Day 4 Presentation</a
	>
</Section>

<Section header="Importance Of Coding">
	<p>
		Deep Sea Tactics Coding works to create software that helps solve the complex problems presented
		by the MATE ROV challenge. Coding is a central piece of modern-day problem-solving, and we aim
		to create software solutions that meet and surpass the ROV requirements.
	</p>
</Section>

<style>
	p {
		font-family: 'Encode Sans Variable', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 1.25rem;
		line-height: 1.502;
		margin-right: 0.15rem;
	}
	.button {
		background: var(--blue);
		color: var(--textColor2);
		border-radius: 3px;
		margin-right: 20px;
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
