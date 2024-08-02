<script lang="ts">
	import type { Session } from '@supabase/supabase-js';

	interface Props {
		data: { session: Session | null };
	}
	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Profile | Fintraq</title>
</svelte:head>

{#snippet dataRow(name: string, value: string)}
	<p class="flex flex-col justify-between items-start p-4 md:items-center md:flex-row">
		<span class="font-medium">{name}:</span>
		<span class="select-all">{value}</span>
	</p>
{/snippet}

<section class="flex flex-col justify-center items-start p-4 mx-auto space-y-2 w-3/4 min-h-screen">
	<h1 class="text-2xl font-bold">Your profile</h1>
	<section class="rounded-sm md:w-3/4 bg-slate-200">
		{@render dataRow('Email', data.session?.user.email!)}
	</section>

	<form method="POST" action="?/signout">
		<button
			class="px-4 py-2 font-semibold rounded-sm bg-zinc-800 text-zinc-50 hover:bg-zinc-700"
			type="submit">Sign out</button
		>
	</form>
</section>
