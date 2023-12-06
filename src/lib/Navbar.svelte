<script lang="ts">
	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<div class="spacer"></div>

<nav class:small={scrollY > 0}>
	<a href="/">
		<img src="/images/horizontal_logo.png" alt="Deep Sea Tactics Logo" class="logo" />
	</a>

	<div class="links">
		<a href="/about">About</a>
		<div class="dropdown">
			<a href="/team">Team</a>
			<div class="dropdown-content">
				<a href="/software">Software</a>
				<a href="/electrical">Electrical</a>
				<a href="/engineering">Engineering</a>
				<a href="/design">Design</a>
				<a href="/marketing">Marketing</a>
			</div>
		</div>
		<a href="/sponsor">Sponsor</a>
	</div>
</nav>

<style>
	nav {
		position: fixed;
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100px;
		z-index: 1;
		top: 0px;
		justify-content: space-between;
		align-items: center;
		background-color: #f2f2f2;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		transition: all 0.2s ease-in-out;	
	}

	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #ebebeb;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
		padding: 10px;
		border-radius: 3px;
		transform: translateX(-50%);
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}

	.logo {
		width: auto;
		height: 6rem;
		margin-left: 0.8rem;
		transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
		opacity: 1;
	}

	.logo:hover {
		opacity: 0.8;
	}

	.links {
		margin-right: 1.2rem;
		font-family: 'Bebas Neue';
		font-style: normal;
		font-weight: 400;
		color: #000000;
		text-align: right;
		text-decoration: none;
		height: 100%;
		display: flex;
		align-items: center;
		transition: all 0.2s ease-in-out;	
		
	}

	.links a {
		color: inherit;
		text-decoration: inherit;
		margin-left: 15px;
		font-size: 1.5rem;
		margin-right: 15px;
		transition: all 0.2s ease-in-out;	
	}

	.links a:hover {
		color: #666666;
	}

	.small {
		height: 70px;
	}

	.small .logo {
		height: 70px;
		width: auto;
	}
	.small .links {
		margin-top: 5px;
	}

	@media screen and (max-width: 50.313rem) {
		nav {
			flex-direction: column;
			text-align: center;
			padding-bottom: 0.5rem;
			padding-top: 0.5rem;
			box-sizing: border-box;
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
