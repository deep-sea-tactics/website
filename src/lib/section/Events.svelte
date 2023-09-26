<script lang="ts">
	import Section from './Section.svelte';
	import Item from '../Item.svelte';

	let months = ["January", "Februrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	let days = ["0th", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th" ,"28th", "29th", "30th", "31st"]

	interface Event {
		title: string,
		description: string;
		date: number;
	}

	const events: Event[] = [
		{
			title: 'Regional Competiton',
			description: 'Compete in the regional competition at Old Dominion University.',
			date: new Date().setFullYear(2023, 5, 13)
		},
		{
			title: "International Competiton",
			description: 'Compete in the international competition in Longmont, Colorado.',
			date: new Date().setFullYear(2023, 6, 22)
		}
	];
	let getDateString = (date: number) => {
		let newDate = new Date(date);
		let month = months[newDate.getMonth()]
		let day = days[newDate.getDate()]
		return `${month} ${day}, ${newDate.getFullYear()}`
	}
</script>

<div id="events">
	<Section header="Events">
		<div class="item-wrapper">
			{#each events as event}
				<div class="event">
					<h2>{event.title}</h2>
					<h3>{getDateString(event.date)}</h3>
				</div>
			{/each}
		</div>
	</Section>
</div>

<style>

	.item-wrapper {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
</style>
