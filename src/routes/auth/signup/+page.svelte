<script lang="ts">
	import Input from '$lib/components/TextInput.svelte';
	import Button from '$lib/components/Button.svelte';
	import currencies from '$lib/currencies.json';
</script>

<svelte:head>
	<title>Sign up | Fintraq</title>
</svelte:head>

<main class="flex flex-col gap-6 justify-center items-start p-4 mx-auto w-3/4 min-h-screen">
	<div>
		<h1 class="text-2xl font-bold">Create new account</h1>
		<p>Enter your information below to create new account on Fintraq</p>
	</div>
	<form class="space-y-2 lg:w-1/3" method="POST">
		<div class="flex flex-col gap-2 md:flex-row">
			<Input type="text" name="first_name" placeholder="First name" />
			<Input type="text" name="last_name" placeholder="Last name" />
		</div>

		<Input type="email" name="email" placeholder="Email" />
		<Input type="password" name="password" placeholder="Password" />

		<div>
			<label for="currency"></label>
			<select id="currency" name="currency" class="block px-4 py-2 appearance-none">
				{#each currencies as currency}
					<option value={currency.code}>{currency.name} - {currency.code}</option>
				{/each}
			</select>
		</div>
		<Button type="submit">Sign up</Button>
	</form>
	<p>
		Already have an account? <a
			href="/auth/signin"
			class="font-medium text-blue-600 transition-colors duration-300 hover:text-blue-800"
			>Sign in</a
		>
	</p>
</main>
