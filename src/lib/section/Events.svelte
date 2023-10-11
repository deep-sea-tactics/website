<script lang="ts">
	import Section from './Section.svelte';

	interface Event {
		title: string,
		description: string;
		date: Date | null;
	}

	const events: Event[] = [
		{
			title: '2023 Regional Competiton',
			description: 'Compete in the regional competition at Old Dominion University.',
			date: new Date(new Date().setFullYear(2023, 4, 13))
		},
		{
			title: "2023 International Competiton",
			description: 'Compete in the international competition in Longmont, Colorado.',
			date: new Date(new Date().setFullYear(2023, 5, 22))
		},
		{
			title: '2024 Regional Competiton',
			description: 'Compete in the regional competition at Old Dominion University.',
			date: null
		},
		{
			title: "2024 International Competiton",
			description: 'Compete in the international competition in Longmont, Colorado.',
			date: null
		}
	];
	let getDateString = (date: Date) => {
		return new Intl.DateTimeFormat("en-US", { month: "long", day: "2-digit", year: "numeric" }).format(date);
	}
</script>

<div id="events">
	<Section header="Events">
		<div class="item-wrapper">
			{#each events as event}
			<div class="eventWrap">
				<div class="event">
					<div class="eventInner">
						<div class="eventTitle">
							<h2>{event.title}</h2>
							{#if event.date != null}
								<h3>{getDateString(event.date)}</h3>
							{:else}
								<h3>Unscheduled</h3>
							{/if}
						</div>
						
						<div class="description">
							{event.description}
						</div>
					</div>
					
				</div>
			</div>
			{/each}
		</div>
	</Section>
</div>

<style>
	.item-wrapper {
		margin-top: 2rem;
		margin-bottom: 2rem;
		display: flex;
		flex-direction: row;
		border-radius: 1rem;
	}

	.eventWrap {
		min-width: 350px;
		padding-right: 20px;
		box-sizing: border-box;
	}
	.event {
		
		color: var(--textColor2);
		z-index: 1;
		backdrop-filter: blur(1px);
		background-position: center;
		background-size: cover;
		background-image: url("/images/jumbotron.png");
	}
	.eventInner {
		background: rgba(0, 0, 0, 0.3);
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}

	.eventTitle {
		padding: 5px 20px;
	}

	.description {
		width: 100%;
		padding: 10px 20px;
		margin-top: 5vh;
		background: rgba(0, 0, 0, 0.3);
		box-sizing: border-box;
	}
</style>
