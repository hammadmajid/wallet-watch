<script lang="ts">
	import { AppBar, Drawer, getDrawerStore, type DrawerSettings } from '@skeletonlabs/skeleton'
	import SideBar from '$lib/components/SideBar.svelte'

	const drawerStore = getDrawerStore()
	const drawerSettings: DrawerSettings = {
		width: 'max-w-max',
		position: 'right'
	}
</script>

<Drawer>
	<SideBar />
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
		<SideBar />
	</div>

	<div class="w-full">
		<slot />
	</div>
</div>
