<script lang="ts" context="module">
    
</script>

<script lang="ts">
	import { Canvas, Layer, type Render } from 'svelte-canvas';
    import { spring } from 'svelte/motion';

    let cursor = { x: 0, y: 0 }
    let cursorPosition = spring({ x: 0, y: 0 });
    let clicking = false;
    const effectTags =  ["a", "img", "button"];

	const render: Render = ({ context, width, height }) => {
        const element = document.elementFromPoint(cursor.x, cursor.y);

        context.fillStyle = '#3b82f6';
        context.strokeStyle = '#3b82f6';

        // draw a circle at the cursor position - cursor follower
        context.beginPath();
        context.lineWidth = 2;
        context.arc($cursorPosition.x, $cursorPosition.y, clicking ? 12 : 10, 0, 2 * Math.PI);
        context.stroke();
        
        const overClickableElement = element && effectTags.includes(element.tagName.toLowerCase());
        const size = overClickableElement ? 8 : 6;

        // draw a circle at the cursor position - cursor
        context.beginPath();
        context.arc(cursor.x, cursor.y, size, 0, 2 * Math.PI);
        context.fill();
	};
</script>

<svelte:window 
    on:mousemove={e => {
        cursor = ({ x: e.clientX, y: e.clientY })
        cursorPosition.set(cursor)
    }} 
    on:mousedown={() => clicking = true}
    on:mouseup={() => clicking = false}
/>

<div aria-hidden="true">
    <Canvas autoplay>
        <Layer {render} />
    </Canvas>
</div>

<style>
    :global(*) {
        /* TODO: show cursor if js disabled */
        cursor: none;
    }

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
