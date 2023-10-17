<script lang="ts">
	import Section from './Section.svelte';

	interface Event {
		title: string;
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
			title: '2023 International Competiton',
			description: 'Compete in the international competition in Longmont, Colorado.',
			date: new Date(new Date().setFullYear(2023, 5, 22))
		},
		{
			title: '2024 Regional Competiton',
			description: 'Compete in the regional competition at Old Dominion University.',
			date: null
		},
		{
			title: '2024 International Competiton',
			description: 'Compete in the international competition in Longmont, Colorado.',
			date: null
		}
	];
	let getDateString = (date: Date) => {
		return new Intl.DateTimeFormat('en-US', {
			month: 'long',
			day: '2-digit',
			year: 'numeric'
		}).format(date);
	};
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
		display: flex;
		flex-wrap: wrap;
		margin: auto;
		flex-shrink: 10;
		justify-content: center;
	}

	.eventWrap {
		box-sizing: border-box;
		min-width: 250px;
		margin: 10px;
		width: calc(25% - 20px);
	}
	.event {
		color: var(--textColor2);
		z-index: 1;
		backdrop-filter: blur(1px);
		background-position: center;
		background-size: cover;
		background-image: url('/images/jumbotron.png');
		height: 100%;
	}
	.eventInner {
		background: rgba(0, 0, 0, 0.5);
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: start;
	}

	.eventTitle {
		padding: 5px 20px;
	}

	.description {
		width: 100%;
		padding: 10px 20px;
		background: rgba(0, 0, 0, 0.5);
		box-sizing: border-box;
	}
</style>
