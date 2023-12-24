<script>
	import '../app.pcss';
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/400.css';
</script>

<nav>
    <a href="/"><img src="horizontal_logo.png" alt="placeholder" /></a>
    <ul>
        <li><a href="#">Teams</a></li>
        <li><a href="/tasks">Tasks</a></li>
        <li><a href="#">Sponsor</a></li>
    </ul>
</nav>

<slot />

<style>
	:global(body) {
		--bg: #18181b;
		--accent: #3B82F6;
		--text: #f1f1f1;


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
        gap: 1rem;
    }

    nav {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 1rem;
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 500;
    }

    img {
        height: 5rem;
        filter: invert(100%);
    }

    a {
        text-decoration: none;
        color: var(--text);
    }

    a:hover {
        color: var(--accent);
    }
</style>
