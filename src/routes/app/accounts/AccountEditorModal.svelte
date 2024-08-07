<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton'

	const modalStore = getModalStore()
</script>

{#if $modalStore[0]}
	<div class="p-6 space-y-4 bg-surface-50">
		<h2 class="h2">Add account</h2>
		<form action="?/add" method="POST" class="space-y-3">
			<input class="input" name="name" type="text" placeholder="Account name" required />
			<input class="input" name="balance" type="text" placeholder="Initial balance" required />

			<select name="type" id="type" class="select" required>
				<option value="Checking">Checking</option>
				<option value="Saving">Saving</option>
			</select>
			<div class="flex space-x-2">
				<button class="btn variant-outline" type="button" on:click={() => modalStore.close()}
					>Cancel</button
				>
				<button class="btn variant-filled" type="submit"
					><i class="fa-solid fa-plus"></i><span class="ml-2">Submit</span></button
				>
			</div>
		</form>
	</div>
{/if}
