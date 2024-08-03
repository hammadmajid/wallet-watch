<script lang="ts">
	interface Props {
		type: 'submit' | 'button' | 'reset' | undefined;
		isOutline?: boolean;
		children: import('svelte').Snippet;
		onClick?: () => void;
	}

	const { type, isOutline = false, children, onClick }: Props = $props();
</script>

{#snippet constructButton(styles: string)}
	<button
		onclick={() => {
			if (onClick) onClick();
		}}
		{type}
		class={'px-4 py-2 rounded-sm border-2 border-zinc-800 transition-all duration-300 font-semibold' +
			' ' +
			styles}>{@render children()}</button
	>
{/snippet}

{#if isOutline}
	{@render constructButton('hover:bg-zinc-200')}
{:else}
	{@render constructButton('bg-zinc-800 hover:bg-zinc-600 text-zinc-50')}
{/if}
