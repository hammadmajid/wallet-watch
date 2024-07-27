<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
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

<main>
	<form method="POST" useenhance={handleSubmit}>
		<div class="header">
			<h1>Login to your account</h1>
			<p>Sign in via magic link with your email below</p>
		</div>
		{#if form?.message !== undefined}
			<div class="form-message {form?.success ? 'success' : 'fail'}">
				{form?.message}
			</div>
		{/if}
		<div>
			<Input type="text" name="email" placeholder="johndeo@example.com" />

			{#if form?.errors?.email}
				<div class="email-error error">
					{form?.errors?.email}
				</div>
			{/if}
		</div>
		<div class="btn">
			<Button type="button" style="primary" text={loading ? 'Loading' : 'Send magic link'} />
		</div>
	</form>
</main>

<style>
	main {
		padding: 1rem;
		width: 85%;
		margin: 0 auto;
	}

	.header > h1 {
		margin-bottom: 8px;
	}

	.header > p {
		margin-bottom: 1rem;
	}

	.form-message,
	.email-error {
		margin: 2rem 0;
		width: max-content;
	}

	.success {
		background-color: var(--color-sky);
		padding: 0.5rem;
		border-radius: 8px;
		color: var(--color-crust);
		font-weight: 500;
	}

	.error,
	.fail {
		background-color: var(--color-red);
		padding: 0.5rem;
		border-radius: 8px;
		color: var(--color-crust);
		font-weight: 500;
	}

	.btn {
		margin-top: 1rem;
	}
</style>
