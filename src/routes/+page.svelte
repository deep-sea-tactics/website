<script>
	import About from '$lib/section/About.svelte';
	import SponsorInfo from '$lib/section/SponsorInfo.svelte';
	import Events from '$lib/section/Events.svelte';
	import Donate from '$lib/section/Donate.svelte';
	import { title } from '$lib/Jumbotron.svelte';

	$title = "Landstown High School's innovative underwater robotics team";
</script>

<About />
<SponsorInfo />
<Events />
<Donate />
