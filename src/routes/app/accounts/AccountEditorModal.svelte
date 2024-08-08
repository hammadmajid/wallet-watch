<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton'

	export let id = ''
	export let name = ''
	export let type = 'Checking'
	export let balance = ''
	export let operation = 'Add'

	const modalStore = getModalStore()
</script>

{#if $modalStore[0]}
	<div class="p-6 space-y-4 bg-surface-50">
		<h2 class="h2">{operation} account</h2>
		<form action="?/{operation.toLowerCase()}" method="POST" class="space-y-3">
			<input type="text" name="id" id="id" bind:value={id} class="hidden" />
			<input
				class="input"
				name="name"
				type="text"
				placeholder="Account name"
				bind:value={name}
				required
			/>
			<input
				class="input"
				name="balance"
				type="text"
				placeholder="Initial balance"
				bind:value={balance}
				required
				disabled={id ? true : false}
			/>

			<select name="type" id="type" class="select" bind:value={type} required>
				<option value="Checking">Checking</option>
				<option value="Saving">Saving</option>
			</select>
			<div class="flex flex-row justify-end space-x-2 w-full">
				{#if id}
					<button
						formaction="?/delete"
						class="btn variant-outline-error text-error-500"
						type="submit"><i class="fa-solid fa-trash"></i></button
					>
				{/if}
				<div>
					<button class="btn variant-outline" type="button" on:click={() => modalStore.close()}
						>Cancel</button
					>
					<button class="btn variant-filled" type="submit">{operation}</button>
				</div>
			</div>
		</form>
	</div>
{/if}
