<script>
	import '../app.pcss';
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/400.css';
</script>

<nav class="flex w-full items-center justify-between px-4 py-1 text-lg font-medium">
    <a href="/"><img src="horizontal_logo.png" alt="placeholder" class="h-20 filter invert" /></a>
    <ul class="flex flex-row gap-4">
        <li><a class="hover:text-blue-400" href="#">Teams</a></li>
        <li><a class="hover:text-blue-400" href="/tasks">Tasks</a></li>
        <li><a class="hover:text-blue-400" href="#">Sponsor</a></li>
    </ul>
</nav>

<slot />

<style>
	:global(body) {
		font-family: 'Poppins', sans-serif;
        background-color: #18181b;
        color: white;
	}

	:global(*) {
		box-sizing: border-box;
	}
</style>
