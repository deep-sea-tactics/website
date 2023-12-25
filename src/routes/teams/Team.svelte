<script lang="ts">
	import { Circle } from "svelte-text-path";
	import { sineOut } from "svelte/easing";
	import { tweened } from "svelte/motion";

    export let name: string;
    export let color: string;

    let spinning = false;

    let rotation = tweened(0, { duration: 300, easing: sineOut });
	$: desiredRotation = spinning ? $rotation + 5.2 : null;
	$: desiredRotation && rotation.set(desiredRotation);
</script>

<a
    style="--bg: {color}; --rotation: {$rotation}deg"
    href="/teams/{name.toLowerCase()}"
    on:mouseenter={() => spinning = true}
    on:mouseleave={() => spinning = false}
>
    <div class="circle">
        <Circle>
            <tspan fill="white">{@html name + "&nbsp;".repeat(20) + name + "&nbsp;".repeat(20)}</tspan>
        </Circle>
    </div>
    <div class="icon" >
        <div class="iconBG">

        </div>
        <img src="/icons/{name.toLowerCase()}.svg" alt="{name} Logo" />
    </div>
</a>

<style>
    a {
		position: relative;
		margin: 1rem;
		border: 5px solid var(--bg);
		border-radius: 50%;
		width: 310px;
		height: 310px;
		aspect-ratio: 1 1/ 1;
	}

	.icon {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0px;
		top: 0px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
	}

	.icon img {
		width: 25%;
		
		position: relative;
	}
	.iconBG {
		width: 30%;
		position: absolute;
		background: var(--bg);
		height: 30%;
		padding: 2rem;
		border-radius: 50%;

	}

	.circle {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
        transform: rotate(var(--rotation));
	}

	a:hover {
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
	}

    a:hover .icon {
        transform: scale(1.1);
    }
</style>
