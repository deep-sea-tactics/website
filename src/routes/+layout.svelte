<script>
	import '../app.pcss';
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/400.css';
</script>

<slot />

<style>
	:global(body) {
		font-family: 'Poppins', sans-serif;
	}

	:global(*) {
		box-sizing: border-box;
	}
</style>
