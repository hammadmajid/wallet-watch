<script lang="ts">
	import currencies from '$lib/currencies.json'
	import type { ActionData } from './$types'
	import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton'

	export let form: ActionData

	let toastStore = getToastStore()
	const errorToast: ToastSettings = {
		message: form?.code + '' + form?.message ?? '500: Internal server error',
		background: 'variant-filled-error',
		autohide: false
	}

	if (form?.code) {
		toastStore.trigger(errorToast)
	}
</script>

<svelte:head>
	<title>Sign up | Fintraq</title>
</svelte:head>

<main
	class="flex flex-col gap-6 justify-center items-start px-4 py-12 mx-auto min-h-screen md:w-3/4"
>
	<div class="container mx-auto space-y-4">
		<h1 class="h1">Create new account</h1>
		<p>Enter your information below to create new account on Fintraq</p>
	</div>
	<form class="space-y-2 lg:w-1/3" method="POST">
		<div class="flex flex-col gap-2 md:flex-row">
			<label class="label">
				<input
					class="input"
					type="text"
					name="first_name"
					id="first_name"
					placeholder="First name"
					required
				/>
			</label>
			<label class="label">
				<input
					class="input"
					type="text"
					name="first_name"
					id="first_name"
					placeholder="Last name"
					required
				/>
			</label>
		</div>

		<label for="email" class="label">
			<input
				class="input"
				type="email"
				name="email"
				id="email"
				placeholder="Email address"
				required
			/>
		</label>
		<label class="label">
			<input
				class="input"
				placeholder="Password"
				type="password"
				name="password"
				id="password"
				required
			/>
		</label>

		<select name="currency" class="select" required>
			{#each currencies as currency}
				<option value={currency.code + ' - ' + currency.name}
					>{currency.code} - {currency.name}</option
				>
			{/each}
		</select>

		<button class="btn variant-filled" type="submit"
			>Sign up <i class="ml-2 fa-solid fa-arrow-right-to-bracket"></i></button
		>
	</form>
	<p>
		Already have an account? <a
			href="/auth/signin"
			class="font-medium text-blue-600 transition-colors duration-300 hover:text-blue-800"
			>Sign in</a
		>
	</p>
</main>
