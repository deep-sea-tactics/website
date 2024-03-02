<script lang="ts" context="module">
	/**
	 * If any of these symbols are true,
	 * the cursor will be hidden.
	 */
	export const symbolMap = writable<Record<symbol, boolean>>({});

	export const shouldBeHidden = derived(symbolMap, (map) =>
		Object.getOwnPropertySymbols(map).some((symbol) => map[symbol])
	);

	const opacity = tweened(0, { duration: 300, easing: cubicInOut });

	shouldBeHidden.subscribe((hidden) => opacity.set(hidden ? 0 : 1));
</script>

<script lang="ts">
	import { Canvas, Layer, type Render } from 'svelte-canvas';
	import { cubicInOut } from 'svelte/easing';
	import { spring, tweened } from 'svelte/motion';
	import { derived, writable } from 'svelte/store';

	let hasMoved = false;

	let cursor = { x: 0, y: 0 };
	let cursorPosition = spring({ x: 0, y: 0 });
	let clicking = false;
	const effectTags = ['a', 'img', 'button'];

	const render: Render = ({ context }) => {
		if (!hasMoved) return;
		if ($shouldBeHidden) return;

		const elements = document.elementsFromPoint(cursor.x, cursor.y);

		context.globalAlpha = $opacity;

		context.fillStyle = '#3b82f6';
		context.strokeStyle = '#3b82f6';

		// draw a circle at the cursor position - cursor follower
		context.beginPath();
		context.lineWidth = 2;
		context.arc($cursorPosition.x, $cursorPosition.y, clicking ? 12 : 10, 0, 2 * Math.PI);
		context.stroke();

		const overClickableElement = elements.some((element) =>
			effectTags.includes(element.tagName.toLowerCase())
		);
	};
</script>

<svelte:window
	on:mousemove={(e) => {
		cursor = { x: e.clientX, y: e.clientY };
		cursorPosition.set(cursor);
		hasMoved = true;
	}}
	on:mousedown={() => (clicking = true)}
	on:mouseup={() => (clicking = false)}
/>

<div aria-hidden="true">
	<Canvas autoplay>
		<Layer {render} />
	</Canvas>
</div>

<style>
	div :global(canvas) {
		filter: drop-shadow(0px 0px 5px #4444dd);
	}

	div {
		position: fixed;
		pointer-events: none;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 10;
	}
</style>
