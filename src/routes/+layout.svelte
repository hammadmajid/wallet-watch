<script lang="ts">
	import { invalidate } from '$app/navigation';
	import type { SupabaseClient, Session } from '@supabase/supabase-js';
	import { onMount } from 'svelte';

	interface Props {
		data: {
			supabaseClient: SupabaseClient;
			session: Session;
		};
		children: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();
	let { supabaseClient, session } = $state(data);

	onMount(() => {
		const { data } = supabaseClient.auth.onAuthStateChange((event, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<div>

{@render children()}

<style>
	:global(:root) {
		/*
					 Color styles: Using Catppuccin Mocha
						 See: https://github.com/catppuccin/catppuccin
					 License: MIT
				*/
		/* Primary */
		--color-sky: hsl(189, 71%, 73%);
		--color-sapphire: hsl(199, 76%, 69%);
		/* Warning */
		--color-peach: hsl(23, 92%, 75%);
		--color-yellow: hsl(41, 86%, 83%);
		/* Danger */
		--color-red: hsl(343, 81%, 75%);
		--color-maroon: hsl(350, 65%, 77%);
		/* Text */
		--color-text: hsl(226, 64%, 88%);
		--color-subtext1: hsl(227, 35%, 80%);
		--color-subtext0: hsl(228, 24%, 72%);
		/* Background, overlays, shadows etc */
		--color-overlay2: hsl(228, 17%, 64%);
		--color-overlay1: hsl(230, 13%, 55%);
		--color-overlay0: hsl(231, 11%, 47%);
		--color-surface2: hsl(233, 12%, 39%);
		--color-surface1: hsl(234, 13%, 31%);
		--color-surface0: hsl(237, 16%, 23%);
		--color-base: hsl(240, 21%, 15%);
		--color-mantle: hsl(240, 21%, 12%);
		--color-crust: hsl(240, 23%, 9%);
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		background-color: var(--color-crust);
		color: var(--color-text);
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
	}
</style>
