<script lang="ts">
	interface Props {
		title: string;
		isOpen: boolean;
		children: import('svelte').Snippet;
	}

	let { title, isOpen = false, children }: Props = $props();
</script>

{#if isOpen}
	<div class="absolute z-50 p-8 rounded-sm bg-zinc-50">
		<div>
			<h2 class="mb-2 text-2xl font-semibold">{title}</h2>
			{@render children()}
		</div>
	</div>
{/if}
