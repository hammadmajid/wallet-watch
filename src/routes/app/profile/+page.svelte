<script lang="ts">
	import type { Session } from '@supabase/supabase-js';
	import Button from '$lib/components/Button.svelte';

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

<section class="flex flex-col justify-center items-start p-4 mx-auto space-y-2 min-h-screen md:w-3/4">
	<h1 class="text-2xl font-bold">Your profile</h1>
	<section class="rounded-sm md:w-3/4 bg-slate-200">
		{@render dataRow('Name', data.session?.user.user_metadata?.first_name + ' ' + data.session?.user.user_metadata?.last_name)}
		{@render dataRow('Email', data.session?.user.email!)}
		{@render dataRow('Currency', data.session?.user.user_metadata?.currency)}
	</section>

	<form method="POST" action="?/signout">	
		<Button type="submit">Sign out</Button>
	</form>
</section>
