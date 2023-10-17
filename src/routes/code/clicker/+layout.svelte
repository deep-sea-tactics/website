<script>
	//we need to disable all dst stuff so it looks the same as in the tutorials
</script>

<div class="fakeBody">
	<slot/>
</div>

<style>
	.fakeBody {
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		background: white;
		padding: 0px 8px;
		box-sizing: border-box;
	}
	* {
		all: default;
		font-family: 'Times New Roman', Times, serif;
	}
</style>