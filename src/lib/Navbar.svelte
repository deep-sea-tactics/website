<nav class="navbar">
	<script type="application/ld+json">
		{
			 "@context": "http://schema.org",
			 "@type": "SiteNavigationElement",
			 "cssSelector": "tableOfContents"
		}
	</script>
	<img src="./images/horizontal_logo.png" alt="Deep Sea Tactics Logo" class="logo" />
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
		width: 19rem;
		height: 6.0504rem;
		margin-left: 0.8rem;
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
