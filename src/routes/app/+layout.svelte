<script lang="ts">
	import { page } from '$app/stores'
	import {
		AppBar,
		AppRail,
		AppRailAnchor,
		Drawer,
		getDrawerStore,
		type DrawerSettings
	} from '@skeletonlabs/skeleton'

	const drawerStore = getDrawerStore()
	const drawerSettings: DrawerSettings = {
		width: 'max-w-max'
	}

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

<Drawer>
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
</Drawer>

<AppBar shadow="drop-shadow-xl" label="header">
	<svelte:fragment slot="lead">
		<p class="h3">
			<a href="/">Fintraq </a>
		</p>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<button class="btn md:hidden" on:click={() => drawerStore.open(drawerSettings)}
			><i class="w-5 h-5 fa-solid fa-bars"></i></button
		>
	</svelte:fragment>
</AppBar>

<div class="grid md:grid-cols-[max-content_1fr]">
	<div class="hidden md:block">
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
	</div>

	<div class="w-full">
		<slot />
	</div>
</div>
