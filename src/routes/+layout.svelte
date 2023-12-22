<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import type { PageData } from './$types';
	import Jumbotron from '$lib/Jumbotron.svelte';

	import '@fontsource-variable/encode-sans';
	import '@fontsource/bebas-neue';
	import '../app.css';

	export let data: PageData;
</script>

<div class="content">
	<Navbar />
	<Jumbotron />
	{#key data.pathname}
		<div
			in:fly={{ easing: cubicOut, y: 10, duration: 300, delay: 400 }}
			out:fly={{ easing: cubicIn, y: -10, duration: 300 }}
			class="inner"
		>
			<slot />
		</div>
	{/key}
</div>
<Footer />

<style>
	:global(body) {
		margin: 0;
		font-family: 'Encode Sans Variable', sans-serif;
		--bg: #f2f2f2;
		--blue: #0e5db5;
		--textColor: #111111;
		--textColor2: #f1f1f1;
	}
	.content {
		box-sizing: border-box;
		min-height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.inner {
		width: 100%;
	}
</style>
