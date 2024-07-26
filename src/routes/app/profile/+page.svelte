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

<section>
	<h1>Your profile</h1>
	<p>
		You are signed in as <strong>{data.session?.user.email}</strong>
	</p>

	<form method="POST" action="?/signout">
		<Button type="button" style="warning" text="Signout" />
	</form>
</section>

<style>
	section {
		padding: 1rem;
		width: 80%;
		margin: 0 auto;
	}

	h1 {
		margin-bottom: 5px;
	}

	form {
		margin-top: 2rem;
	}
</style>
