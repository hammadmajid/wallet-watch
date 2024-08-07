<script lang="ts">
</script>

<div class="grid grid-cols-[min-content_1fr]">
	<nav class="max-w-min">
		<ul
			class="flex flex-col gap-2 justify-center items-center p-2 max-w-min min-h-screen rounded-sm bg-slate-200"
		>
			<li class="p-2 max-w-min">
				<a href="/app/dashboard">
					<span class="sr-only">Dashboard</span> <i class="w-4 h-4 fa-solid fa-home"></i>
				</a>
			</li>
			<li class="p-2 max-w-min">
				<a href="/app/records">
					<span class="sr-only">Records</span> <i class="w-4 h-4 fa-solid fa-list"></i>
				</a>
			</li>
			<li class="p-2 max-w-min">
				<a href="/app/accounts">
					<span class="sr-only">Accounts</span> <i class="w-4 h-4 fa-solid fa-bank"></i>
				</a>
			</li>
			<li class="p-2 max-w-min">
				<a href="/app/profile">
					<span class="sr-only">Profile</span> <i class="w-4 h-4 fa-solid fa-user"></i>
				</a>
			</li>
		</ul>
	</nav>

	<div id="swup">
		<slot />
	</div>
</div>

