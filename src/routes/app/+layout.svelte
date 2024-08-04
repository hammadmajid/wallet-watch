<script lang="ts">
	import { onMount } from 'svelte'
	import Swup from 'swup'
	import SwupProgressPlugin from '@swup/progress-plugin'

	onMount(() => {
		const swup = new Swup({
			plugins: [
				new SwupProgressPlugin({
					className: 'swup-progress-bar',
					transition: 300,
					delay: 300,
					initialValue: 0.25,
					finishAnimation: true
				})
			]
		})
	})

	interface Props {
		children: import('svelte').Snippet
	}

	let { children }: Props = $props()
</script>

<div class="grid grid-cols-[min-content_1fr]">
	<nav class="max-w-min">
		<ul
			class="flex flex-col gap-2 justify-center items-center p-2 max-w-min min-h-screen rounded-sm bg-slate-200"
		>
			<li class="p-2 max-w-min">
				<a href="/app/dashboard">
					<span class="sr-only">Dashboard</span> <i class="w-4 h-4 fa-solid fa-home"></i>
				</a>
			</li>
			<li class="p-2 max-w-min">
				<a href="/app/records">
					<span class="sr-only">Records</span> <i class="w-4 h-4 fa-solid fa-list"></i>
				</a>
			</li>
			<li class="p-2 max-w-min">
				<a href="/app/accounts">
					<span class="sr-only">Accounts</span> <i class="w-4 h-4 fa-solid fa-bank"></i>
				</a>
			</li>
			<li class="p-2 max-w-min">
				<a href="/app/profile">
					<span class="sr-only">Profile</span> <i class="w-4 h-4 fa-solid fa-user"></i>
				</a>
			</li>
		</ul>
	</nav>

	<div id="swup">
		{@render children()}
	</div>
</div>

<style>
	/* Define a transition duration during page visits */
	html.is-changing .transition-fade {
		transition: opacity 0.25s;
		opacity: 1;
	} /* Define the styles for the unloaded pages */
	html.is-animating .transition-fade {
		opacity: 0;
	}
	.swup-progress-bar {
		height: 4px;
		background-color: blue;
	}
</style>
