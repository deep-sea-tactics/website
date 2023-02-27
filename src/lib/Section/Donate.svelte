<script>
	import Section from "./Section.svelte";
	import Item from "../Item.svelte";
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
					team’s faculty mentor, Ty Schwartz, at tyler.swartz@vbschools.com
				</p>
			</div>
			<div class="right-side">
				<Item backgroundColor="#f2f2f2" value="To be determined.">
					<div class="number">
						<h3>1</h3>
					</div>
				</Item>
				<Item backgroundColor="#f2f2f2" value="To be determined.">
					<div class="number">
						<h3>2</h3>
					</div>
				</Item>
				<Item backgroundColor="#f2f2f2" value="To be determined.">
					<div class="number">
						<h3>3</h3>
					</div>
				</Item>
				<Item backgroundColor="#f2f2f2" value="To be determined.">
					<div class="number">
						<h3>4</h3>
					</div>
				</Item>
				<Item backgroundColor="#f2f2f2" value="To be determined.">
					<div class="number">
						<h3>5</h3>
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
		font-family: "Roboto";
	}

	.left-side {
		max-width: 570px;
		margin-top: 0.5em;
		font-size: 25px;
		line-height: 150.19%;
		padding-right: 100px;
	}

	.right-side {
		border-left: 5px solid #f2f2f2;
		padding-left: 50px;
		width: 100%;
		margin-top: -7.5em;
		padding-top: 2em;
		padding-bottom: 2em;
	}

	.number h3 {
		font-family: "Roboto";
		font-style: normal;
		font-weight: bold;
		font-size: 64px;
		line-height: 58px;
		margin-bottom: 0px;
		margin-top: 0px;
	}

	/* become horizontal on mobile */
	@media screen and (max-width: 1000px) {
		.wrapper {
			flex-direction: column;
		}

		.left-side {
			padding-right: 0px;
		}

		.right-side {
			border-left: none;
			padding-left: 0px;
			margin-top: 0px;
		}
	}
</style>
