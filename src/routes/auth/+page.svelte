<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import type { ActionData, SubmitFunction } from './$types.js';

	interface Props {
		form: ActionData;
	}

	const { form }: Props = $props();

	let loading = $state(false);

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async ({ update }) => {
			update();
			loading = false;
		};
	};
</script>

<svelte:head>
	<title>Login | Fintraq</title>
</svelte:head>

<main class="p-4 w-3/4 mx-auto min-h-screen flex flex-col justify-center items-start">
	<form class="space-y-2" method="POST" useenhance={handleSubmit}>
		<div>
			<h1 class="text-2xl font-bold">Login to your account</h1>
			<p>Sign in via magic link with your email below</p>
		</div>
		{#if form?.message !== undefined}
			<div
				class={form?.success
					? 'bg-green-500 px-4 py-2 rounded-sm'
					: 'bg-red-500 text-zinc-50 px-4 py-2 rounded-sm'}
			>
				{form?.message}
			</div>
		{/if}
		<div class="space-y-3">
			<Input type="email" name="email" placeholder="johndeo@example.com" />

			{#if form?.errors?.email}
				<p class="px-4 py-2 rounded-sm bg-red-500 text-zinc-50">
					{form?.errors?.email}
				</p>
			{/if}
		</div>
		<button
			class="px-4 py-2 rounded-sm font-semibold bg-zinc-800 text-zinc-50 hover:bg-zinc-700"
			type="submit">{loading ? 'Loading...' : 'Get magic link'}</button
		>
	</form>
</main>
