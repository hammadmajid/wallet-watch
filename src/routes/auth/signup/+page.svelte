<script>
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>Signup | WalletWatch</title>
</svelte:head>

<main class="form-wrapper">
	<form method="POST" name="signup">
		<h2>Create new account</h2>

		<div class="name-wrapper">
			<Input type="text" name="name" placeholder="First name"></Input>
			<Input type="text" name="name" placeholder="Last name"></Input>
		</div>
		<Input type="email" name="name" placeholder="Email"></Input>
		<Input type="password" name="name" placeholder="Password"></Input>
		<Input type="password" name="name" placeholder="Confirm password"></Input>

		<Button type="primary" text="Sign up" />
	</form>
	<p>Already have an account? <a class="link-signin" href="/auth/signin">Sign In</a></p>
</main>

<style>
	.form-wrapper {
		width: 100vw;
		display: grid;
		place-content: center;
		text-align: center;
		padding: 1rem;
	}

	.name-wrapper {
		display: flex;
		gap: 1rem;
	}

	.link-signin {
		color: var(--color-sky);
		text-decoration: none;
		transition: color 250ms;
	}

	.link-signin:hover {
		color: var(--color-sapphire);
		color: var(--color-sky);
	}

	form {
		display: grid;
		gap: 1rem;
		margin-bottom: 1rem;
	}
</style>
