<script>
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';

	import '@fontsource-variable/encode-sans';
	import '@fontsource/bebas-neue';
	import '../app.css';
</script>

<div class="content">
	<Navbar />
	<div class="inner">
		<slot />
	</div>
</div>
<Footer />

<style>
	:global(body) {
		margin: 0;
		font-family: 'Encode Sans Variable', sans-serif;
		--bg: #f2f2f2;
		--blue: #2c3289;
		--textColor: #111111;
		--textColor2: #f1f1f1;
	}
	.content {
		padding-bottom: 61px;
		box-sizing: border-box;
		min-height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.inner {
		width: 100%;
		margin-top: 4rem;
	}
</style>
