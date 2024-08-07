<script lang="ts">
	import { page } from '$app/stores'
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton'
</script>

<div class="grid grid-cols-[max-content_1fr]" id="swup">
	<AppRail>
		<AppRailAnchor
			href="/app/dashboard"
			target="_self"
			title="Dashboard"
			selected={$page.url.pathname === '/app/dashboard'}
		>
			<svelte:fragment slot="lead"><i class="fa-solid fa-home"></i></svelte:fragment>
			<span>Dashboard</span>
		</AppRailAnchor>
		<AppRailAnchor
			href="/app/records"
			target="_self"
			title="Records"
			selected={$page.url.pathname === '/app/records'}
		>
			<svelte:fragment slot="lead"><i class="fa-solid fa-list"></i></svelte:fragment>
			<span>Records</span>
		</AppRailAnchor>
		<AppRailAnchor
			href="/app/accounts"
			target="_self"
			title="Accounts"
			selected={$page.url.pathname === '/app/accounts'}
		>
			<svelte:fragment slot="lead"><i class="fa-solid fa-bank"></i></svelte:fragment>
			<span>Accounts</span>
		</AppRailAnchor>
		<AppRailAnchor
			href="/app/profile"
			target="_self"
			title="Profile"
			selected={$page.url.pathname === '/app/profile'}
		>
			<svelte:fragment slot="lead"><i class="fa-solid fa-user"></i></svelte:fragment>
			<span>Profile</span>
		</AppRailAnchor>
	</AppRail>

	<div>
		<slot />
	</div>
</div>
