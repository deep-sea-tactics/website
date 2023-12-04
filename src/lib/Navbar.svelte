<script lang="ts">
	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<div class="spacer"></div>

<nav class="navbar" class:small={scrollY > 0}>
	<a href="/">
		<img src="/images/horizontal_logo.png" alt="Deep Sea Tactics Logo" class="logo" />
	</a>

	<div class="links">
		<a href="/about">About</a>
		<!--<a href="/#events">Events</a>
		<a href="/#donate">Donate</a>
		<a href="/#">Teams</a>-->
	</div>

	<div class="teamsDropDown">
		<a href="/team/code"></a>
	</div>
</nav>

<style>
	.teamsDropDown {
		position: fixed;
	}
	.navbar {
		position: sticky;
		display: flex;
		flex-direction: row;
		width: 100%;
		z-index: 1;
		top: 0px;
		justify-content: space-between;
		align-items: center;
		background-color: #f2f2f2;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}

	.logo {
		width: auto;
		height: 6rem;
		margin-left: 0.8rem;
		transition: height 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
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

	.small .logo {
		height: 4rem;
		width: auto;
	}
	.small .links {
		margin-top: 5px;
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
