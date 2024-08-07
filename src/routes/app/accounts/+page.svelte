<script lang="ts">
	import AddAccountModal from './AddAccountModal.svelte'
	import { getModalStore, type ModalComponent, type ModalSettings } from '@skeletonlabs/skeleton'

	export let data

	let accounts = data.accounts

	let modalStore = getModalStore()
	const addAccountModal: ModalComponent = { ref: AddAccountModal }
	const modal: ModalSettings = {
		type: 'component',
		component: addAccountModal
	}
</script>

<svelte:head>
	<title>Accounts | Fintraq</title>
</svelte:head>

<main class="flex flex-col justify-start items-start p-4 mx-auto space-y-6 min-h-screen md:w-3/4">
	<header class="flex flex-row justify-between w-full">
		<h1 class="h1">Accounts</h1>
		<button
			class="btn variant-filled sm:btn-sm md:btn-lg"
			type="button"
			on:click={() => modalStore.trigger(modal)}
			><i class="fa-solid fa-plus"></i><span class="ml-2">Add account</span></button
		>
	</header>
	{#if accounts}
		<div class="table-container">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Name</th>
						<th>Balance</th>
						<th>Type</th>
					</tr>
				</thead>
				<tbody>
					{#each accounts as account}
						<tr>
							<td>{account.name}</td>
							<td>{account.balance}</td>
							<td>{account.type}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{:else}
		<div class="px-1 mx-auto w-full text-center md:px-8 md:w-3/4 min-h-max">
			<p class="text-lg">No account found.</p>
		</div>
	{/if}

</main>
