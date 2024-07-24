<script>
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>Sign In | Fintraq</title>
</svelte:head>

<main class="form-wrapper">
	<form method="POST" name="signup">
		<h2>Welcome back!</h2>

		<Input type="email" name="email" placeholder="Email"></Input>
		<Input type="password" name="password" placeholder="Password"></Input>

		<Button type="button" style="primary" text="Sign In" />
	</form>
	<p>Don't have an account? <a class="link-signup" href="/auth/signup">Sign Up</a></p>
</main>

<style>
	.form-wrapper {
		width: 100vw;
		display: grid;
		place-content: center;
		text-align: center;
		padding: 1rem;
	}

	.link-signup {
		color: var(--color-sky);
		text-decoration: none;
		transition: color 250ms;
	}

	.link-signup:hover {
		color: var(--color-sapphire);
		color: var(--color-sky);
	}

	form {
		display: grid;
		gap: 1rem;
		margin-bottom: 1rem;
	}
</style>
