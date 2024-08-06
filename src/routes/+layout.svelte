<script lang="ts">
	import '$lib/app.css'
	import { invalidate } from '$app/navigation'
	import type { SupabaseClient, Session } from '@supabase/supabase-js'
	import { onMount } from 'svelte'

	interface Props {
		data: {
			supabaseClient: SupabaseClient
			session: Session
		}
		children: import('svelte').Snippet
	}

	let { data, children }: Props = $props()
	let { supabaseClient, session } = $state(data)

	onMount(() => {
		const { data } = supabaseClient.auth.onAuthStateChange((event, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>

<div class="w-screen min-h-screen bg-zinc-100 text-zinc-800">
	{@render children()}
</div>
