<script lang="ts">
	import Section from './Section.svelte';
	import Item from '../Item.svelte';

	interface Event {
		description: string;
		month: string;
		day: string;
	}

	const events: Event[] = [
		{
			description: 'Compete in the regional competition at Old Dominion University.',
			month: 'May',
			day: '13th'
		},
		{
			description: 'Compete in the international competition in Longmont, Colorado.',
			month: 'June',
			day: '22nd'
		}
	];
</script>

<div id="events">
	<Section header="Events">
		<div class="item-wrapper">
			{#each events as event}
				<Item value={event.description}>
					<div class="date">
						<h3 class="month">{event.month}</h3>
						<h3 class="day">{event.day}</h3>
					</div>
				</Item>
			{/each}
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
