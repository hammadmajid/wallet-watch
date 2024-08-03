<script lang="ts">
	import Input from '$lib/components/TextInput.svelte';
	import Button from '$lib/components/Button.svelte';
	import type { FormAction } from './$types';

	interface Props {
		form: FormAction;
	}

	let { form }: Props = $props();
</script>

<svelte:head>
	<title>Sign in | Fintraq</title>
</svelte:head>

<main
	class="flex flex-col gap-6 justify-center items-start px-4 py-12 mx-auto min-h-screen md:w-3/4"
>
	<div>
		<h1 class="text-2xl font-bold">Welcome back!</h1>
		<p>Enter your information below to login on Fintraq</p>
	</div>
	{#if form?.code !== undefined}
		<div class="px-4 py-2 my-4 bg-red-400 rounded-sm">
			<h2 class="text-lg font-medium">{form.code}</h2>
			<p>
				{form.message}
			</p>
		</div>
	{/if}
	<form class="space-y-2 w-full md:w-1/2" method="POST">
		<Input type="email" name="email" placeholder="Email" />
		<Input type="password" name="password" placeholder="Password" />
		<Button type="submit">Sign in <i class="ml-2 fa-solid fa-arrow-right-to-bracket"></i></Button>
	</form>
	<p>
		Don't have an account? <a
			href="/auth/signup"
			class="font-medium text-blue-600 transition-colors duration-300 hover:text-blue-800"
			>Sign up</a
		>
	</p>
</main>
