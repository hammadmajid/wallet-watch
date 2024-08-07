<script lang="ts">
	import type { UserProfileData } from '$lib'

	export let data: UserProfileData
</script>

<svelte:head>
	<title>Profile | Fintraq</title>
</svelte:head>

<main
	class="flex flex-col justify-start items-start p-4 mx-auto space-y-6 min-h-screen md:w-3/4"
>
	<h1 class="h1">Your profile</h1>
	<div class="table-container">
		<table class="table table-hover">
			<tbody>
				<tr>
					<td>Name</td>
					<td>{data.name}</td>
				</tr>

				<tr>
					<td>Email</td>
					<td>{data.email}</td>
				</tr>

				<tr>
					<td>Currency</td>
					<td>{data.currency}</td>
				</tr>
			</tbody>
		</table>
	</div>

	<form method="POST" action="?/signout">
		<button class="btn variant-filled" type="submit"
			>Sign out <i class="ml-2 fa-solid fa-arrow-right-from-bracket"></i></button
		>
	</form>
</main>
