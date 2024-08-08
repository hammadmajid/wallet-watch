<script lang="ts">
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton'
	import { page } from '$app/stores'

	const tiles = [
		{
			name: 'Dashboard',
			icon: 'home'
		},
		{
			name: 'Records',
			icon: 'list'
		},
		{
			name: 'Accounts',
			icon: 'bank'
		},
		{
			name: 'Profile',
			icon: 'user'
		}
	]
</script>

<AppRail>
	{#each tiles as { name, icon }}
		<AppRailAnchor
			href="/app/{name.toLowerCase()}"
			target="_self"
			title={name}
			selected={$page.url.pathname === `/app/${name.toLowerCase()}`}
		>
			<svelte:fragment slot="lead"><i class="fa-solid fa-{icon}"></i></svelte:fragment>
			<span>{name}</span>
		</AppRailAnchor>
	{/each}
</AppRail>
