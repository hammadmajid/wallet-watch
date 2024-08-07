<script lang="ts">
	import '$lib/app.css'
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'
	import { initializeStores, Modal, Toast, AppBar } from '@skeletonlabs/skeleton'

	initializeStores()

	export let data

	let { supabase, session } = data

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>

<Modal />
<Toast />
<div class="w-screen min-h-screen">
	<AppBar shadow="drop-shadow-xl" label="header">
		<svelte:fragment slot="lead"><p class="h3"><a href="/">Fintraq</a></p></svelte:fragment>
		<svelte:fragment slot="trail"
			><a href="https://github.com/hammadmajid/fintraq"
				><i class="w-6 h-6 fa-brands fa-github"></i></a
			></svelte:fragment
		>
	</AppBar>

	<slot />
</div>
