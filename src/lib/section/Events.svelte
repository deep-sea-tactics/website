<script>
	import Section from './Section.svelte';
	import Item from '../Item.svelte';
</script>

<div id="events">
	<Section header="Events">
		<div class="item-wrapper">
			<Item value="Compete in the regional competition at Old Dominion University.">
				<div class="date">
					<h3 class="month">May</h3>
					<h3 class="day">13th</h3>
				</div>
			</Item>
			<Item value="Compete in the international competition in Longmont, Colorado.">
				<div class="date">
					<h3 class="month">June</h3>
					<h3 class="day">22nd</h3>
				</div>
			</Item>
		</div>
	</Section>
</div>

<style>
	.date {
		text-transform: uppercase;
		font-family: 'Encode Sans Variable', sans-serif;
		font-weight: 700;
		text-align: center;
	}

	.date h3 {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.month {
		font-size: 1rem;
	}

	.day {
		font-size: 1.8rem;
	}

	.item-wrapper {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
</style>
