<script lang="ts">
	export let title: string
	export let isOpen: boolean
</script>

{#if isOpen}
	<div
		class="grid absolute top-0 left-0 z-50 place-content-center p-8 w-screen h-screen rounded-sm bg-zinc-50/75"
	>
		<div
			class="px-4 py-8 w-full rounded-sm border-2 drop-shadow-xl md:px-12 bg-zinc-100 border-zinc-800"
		>
			<h2 class="mb-6 text-2xl font-semibold">{title}</h2>
			<slot />
		</div>
	</div>
{/if}
