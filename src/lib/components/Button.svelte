<script lang="ts">
	export let type: 'submit' | 'button' | 'reset' | undefined
	export let isOutline: boolean = false
</script>

{#if isOutline}
	<button
		{type}
		class="px-4 py-2 font-semibold rounded-sm border-2 transition-all duration-300 hover:bg-zinc-200 border-zinc-800"
	>
		<slot />
	</button>
{:else}
	<button
		{type}
		class="px-4 py-2 font-semibold rounded-sm border-2 transition-all duration-300 bg-zinc-800 hover:bg-zinc-600 hover:border-zinc-600 text-zinc-50 border-zinc-800"
	>
		<slot />
	</button>
{/if}
