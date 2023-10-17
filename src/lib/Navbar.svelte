<script lang="ts">
	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<nav class="navbar" class:small={scrollY > 0}>
	<a href="/">
		<img src="/images/horizontal_logo.png" alt="Deep Sea Tactics Logo" class="logo" />
	</a>

	<div class="links">
		<a href="/about">About</a>
		<a href="/#events">Events</a>
		<a href="/#donate">Donate</a>
	</div>
</nav>

<style>
	.navbar {
		position: fixed;
		display: flex;
		flex-direction: row;
		width: 100%;
		z-index: 1;
		justify-content: space-between;
		align-items: center;
		background-color: #f2f2f2;
	}

	.logo {
		width: auto;
		height: 6rem;
		margin-left: 0.8rem;
		transition: height 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.small .logo {
		height: 4rem;
	}

	.links {
		margin-right: 1.2rem;
		font-size: 1.36rem;
		font-family: 'Bebas Neue';
		font-style: normal;
		font-weight: 400;
		line-height: 1.813rem;
		letter-spacing: 0.216rem;
		color: #000000;
		text-align: right;
		text-decoration: none;
	}

	.links a {
		color: inherit;
		text-decoration: inherit;
		margin-left: 0.8rem;
		margin-right: 0.8rem;
		transition: background-color 0.2s ease-in-out;
	}

	.links a:hover {
		color: #666666;
	}

	@media screen and (max-width: 50.313rem) {
		.navbar {
			flex-direction: column;
			text-align: center;
			padding-bottom: 0.5rem;
			padding-top: 0.5rem;
		}

		.logo {
			width: 80%;
			height: auto;
			margin: auto;
		}

		.links {
			margin: 0;
			font-size: 1.125rem;
			line-height: 1.313rem;
			margin-top: 1rem;
			padding-bottom: 0.8rem;
			text-align: center;
		}
	}
</style>
