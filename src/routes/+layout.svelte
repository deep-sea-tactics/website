<script lang="ts">
	import '../app.pcss';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/700.css';
	import Cursor from './Cursor.svelte';
</script>

<nav>
	<a href="/" class="mainLink">
		<img src="/horizontal_logo.png" alt="Deep Sea Tactics Logo" />
	</a>
	<ul>
		<li><a href="/teams">Teams</a></li>
		<li><a href="/tasks">Tasks</a></li>
		<li><a href="/sponsor">Sponsor</a></li>
	</ul>
</nav>

<Cursor />

<slot />

<style>
	:global(body) {
		--bg: #18181b;
		--accent: #3b82f6;
		--text: #f1f1f1;

		margin: 0px;
		font-family: 'Poppins', sans-serif;
		background-color: var(--bg);
		color: var(--text);
	}

	:global(*) {
		box-sizing: border-box;
	}

	ul {
		text-decoration: none;
		color: white;
		list-style: none;
		display: flex;
		flex-direction: row;
		gap: 2rem;
		margin: 0px;
	}

	nav {
		display: flex;
		box-sizing: border-box;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 1.75rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		height: 112px;
	}

	img {
		height: 5rem;
		filter: invert(100%);
		height: 80px;
        scale: 1;
		transition: scale 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

    img:hover {
        scale: 0.97;
    }

	a {
		text-decoration: none;
		color: var(--text);
	}

	a:hover {
		color: var(--accent);
	}
	.mainLink {
		height: 80px;
	}
</style>
