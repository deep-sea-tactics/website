<script>
	import Section from './Section.svelte';
	import Item from '../Item.svelte';
</script>

<div id="donate">
	<Section header="Donate" backgroundColor="#2C3289">
		<div class="wrapper">
			<div class="left-side">
				<p>
					Thank you for your interest in supporting Deep Sea Tactics with a monetary donation!
					Please follow these steps to donate via SchoolCashOnline.
				</p>
				<p>
					If you represent an organization that wishes to sponsor Deep Sea Tactics, please email our
					team at <a href="mailto:landstowndeepseatactics@gmail.com"
						>landstowndeepseatactics@gmail.com</a
					>.
				</p>
			</div>
			<div class="right-side">
				<Item
					backgroundColor="#f2f2f2"
					value="Go to <a target='_blank' href='https://vbschools.schoolcashonline.com/Fee/Details/9513/247/False/True'>the donation page</a> via SchoolCashOnline."
				>
					<div class="number">
						<h3>1</h3>
					</div>
				</Item>
				<Item
					backgroundColor="#f2f2f2"
					value="Choose a donation amount by increasing the donation quantity (3 -> $30, 5 -> $50)."
				>
					<div class="number">
						<h3>2</h3>
					</div>
				</Item>
				<Item backgroundColor="#f2f2f2" value="Sign in, register, or checkout as guest.">
					<div class="number">
						<h3>3</h3>
					</div>
				</Item>
				<Item backgroundColor="#f2f2f2" value="Pay with your preferred payment method.">
					<div class="number">
						<h3>4</h3>
					</div>
				</Item>
			</div>
		</div>
	</Section>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: row;
		font-family: 'Roboto';
	}

	.left-side {
		max-width: 28.5rem;
		margin-top: 0.4em;
		font-size: 1.25rem;
		line-height: 150.19%;
		padding-right: 2.5rem;
	}

	.right-side {
		border-left: 0.25rem solid #f2f2f2;
		padding-left: 2.5rem;
		width: 100%;
		margin-top: -7rem;
		padding-top: 1.6rem;
		padding-bottom: 1.6rem;
	}

	.number h3 {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: bold;
		font-size: 3.2rem;
		line-height: 3.625rem;
		margin-bottom: 0rem;
		margin-top: 0rem;
	}

	/* become horizontal on mobile */
	@media screen and (max-width: 62.5rem) {
		.wrapper {
			flex-direction: column;
		}

		.left-side {
			padding-right: 0rem;
			max-width: 100%;
		}

		.right-side {
			border-left: none;
			padding-left: 0rem;
			margin-top: 0rem;
		}
	}
</style>
