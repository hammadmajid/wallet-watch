<script lang="ts">
	interface Props {
		name: string;
		options: string[];
	}

	let { name, options }: Props = $props();
</script>

<select
	{name}
	class="px-4 py-2 w-full rounded-sm transition-all appearance-none outline-none focus:outline-2 bg-zinc-50 text-zinc-800 focus:outline-slate-800"
>
	{#each options as option}
		<option value={option}>{option}</option>
	{/each}
</select>