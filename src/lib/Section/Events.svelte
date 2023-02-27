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
		font-family: Roboto;
		font-weight: 700;
		text-align: center;
	}

	.date h3 {
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.month {
		font-size: 20px;
	}

	.day {
		font-size: 36px;
	}

	.item-wrapper {
		margin-top: 2.5em;
		margin-bottom: 2.5em;
	}
</style>
