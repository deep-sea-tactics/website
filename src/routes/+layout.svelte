<script>
	import Footer from "$lib/Footer.svelte";
	import Navbar from "$lib/Navbar.svelte";
</script>

<Navbar/>
<div class="content">
	<div class="inner">
		<slot></slot>
	</div>
	  
</div>
<Footer/>

<style>
	:global(body) {
		margin: 0;
		font-family: 'Roboto';
		--bg: #f2f2f2;
		--blue: #2C3289;
		--textColor: #111111;
		--textColor2: #f1f1f1;
	}
	.content {
		padding-bottom: 60px;
		box-sizing: border-box;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>