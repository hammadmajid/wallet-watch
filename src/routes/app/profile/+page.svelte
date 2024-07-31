<script lang="ts">
	import type { Session } from '@supabase/supabase-js';

	interface Props {
		data: { session: Session | null };
	}
	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Profile | Fintraq</title>
</svelte:head>

<section class="p-4 w-3/4 mx-auto min-h-screen flex flex-col justify-center items-start space-y-2">
	<h1 class="text-2xl font-bold">Your profile</h1>
	<p>
		You are signed in as <strong>{data.session?.user.email}</strong>
	</p>

	<form method="POST" action="?/signout">
		<button
			class="px-4 py-2 rounded-sm font-semibold bg-zinc-800 text-zinc-50 hover:bg-zinc-700"
			type="submit">Sign out</button
		>
	</form>
</section>
