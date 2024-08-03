<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type {UserProfileData} from '$lib';
	
	interface Props {
		data: UserProfileData;
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

<section
	class="flex flex-col justify-center items-start p-4 mx-auto space-y-2 min-h-screen md:w-3/4"
>
	<h1 class="text-2xl font-bold">Your profile</h1>
	<section class="w-full rounded-sm divide-y-2 md:w-3/4 bg-slate-200 divide-slate-300">
		{@render dataRow('Name', data.name)}
		{@render dataRow('Email', data.email)}
		{@render dataRow('Currency', data.currency)}
	</section>

	<form method="POST" action="?/signout">	
		<Button type="submit">Sign out <i class="ml-2 fa-solid fa-arrow-right-from-bracket"></i></Button>
	</form>
</section>
