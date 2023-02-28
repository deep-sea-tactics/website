<nav class="navbar">
	<img src="/images/horizontal_logo.png" alt="Logo" class="logo" />
	<div class="links">
		<a href="#about">About</a>
		<a href="#events">Events</a>
		<a href="#donate">Donate</a>
	</div>
</nav>

<style>
	.navbar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: #f2f2f2;
	}

	.logo {
		width: 23.75rem;
		height: 7.563rem;
		margin-left: 1rem;
	}

	.links {
		margin-right: 1.5rem;
		font-size: 1.7rem;
		font-family: 'Bebas Neue';
		font-style: normal;
		font-weight: 400;
		line-height: 1.813rem;
		letter-spacing: 0.27rem;
		color: #000000;
		text-align: right;
		text-decoration: none;
	}

	.links a {
		color: inherit;
		text-decoration: inherit;
		margin-left: 1rem;
		margin-right: 1rem;
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
			text-align: center;
		}
	}
</style>
