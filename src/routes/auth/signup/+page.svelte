<script lang="ts">
	import Input from '$lib/components/TextInput.svelte';
	import Button from '$lib/components/Button.svelte';
	import SelectInput from '$lib/components/SelectInput.svelte';
	import currencies from '$lib/currencies.json';
	import type { FormAction } from './$types';

	interface Props {
		form: FormAction;
	}

	let { form }: Props = $props();
</script>

<svelte:head>
	<title>Sign up | Fintraq</title>
</svelte:head>

<main
	class="flex flex-col gap-6 justify-center items-start px-4 py-12 mx-auto min-h-screen md:w-3/4"
>
	<div>
		<h1 class="text-2xl font-bold">Create new account</h1>
		<p>Enter your information below to create new account on Fintraq</p>
	</div>
	{#if form?.code !== undefined}
		<div class="py-2 px-4 my-4 bg-red-400 rounded-sm">
			<h2 class="text-lg font-medium">{form.code}</h2>
			<p>
				{form.message}
			</p>
		</div>
	{/if}
	<form class="space-y-2 lg:w-1/3" method="POST">
		<div class="flex flex-col gap-2 md:flex-row">
			<Input type="text" name="first_name" placeholder="First name" />
			<Input type="text" name="last_name" placeholder="Last name" />
		</div>

		<Input type="email" name="email" placeholder="Email" />
		<Input type="password" name="password" placeholder="Password" />

		<SelectInput
			name="currency"
			options={currencies.map((currency) => `${currency.code} - ${currency.name}`)}
		></SelectInput>
		<Button type="submit">Sign up <i class="ml-2 fa-solid fa-arrow-right-to-bracket"></i></Button>
	</form>
	<p>
		Already have an account? <a
			href="/auth/signin"
			class="font-medium text-blue-600 transition-colors duration-300 hover:text-blue-800"
			>Sign in</a
		>
	</p>
</main>
