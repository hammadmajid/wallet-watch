<script lang="ts">
	import AccountEditorModal from './AccountEditorModal.svelte'
	import { getModalStore, type ModalComponent, type ModalSettings } from '@skeletonlabs/skeleton'

	export let data

	let accounts = data.accounts
	let totalBalance = 0

	accounts.map((account) => {
		totalBalance += account.balance
	})

	let modalStore = getModalStore()
	const addAccountModal: ModalComponent = { ref: AccountEditorModal }
	const modal: ModalSettings = {
		type: 'component',
		component: addAccountModal
	}

	function triggerEditModal(id: string, name: string, type: string, balance: number) {
		const makeEditModal: ModalComponent = {
			ref: AccountEditorModal,
			props: { id, name, type, balance, operation: "Update" }
		}
		const editModal: ModalSettings = {
			type: 'component',
			component: makeEditModal
		}

		modalStore.trigger(editModal)
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
						<th>Edit</th>
					</tr>
				</thead>
				<tbody>
					{#each accounts as { id, name, balance, type }}
						<tr>
							<td>{name}</td>
							<td>{balance}</td>
							<td>{type}</td>
							<td
								><button
									class="btn variant-outline"
									on:click={() => triggerEditModal(id, name, type, balance)}
									><i class="fa-solid fa-pen"></i></button
								></td
							>
						</tr>
					{/each}
				</tbody>
				<tfoot>
					<tr>
						<th colspan="2">Calculated Balance:</th>
						<td>{totalBalance.toFixed(2)}</td>
					</tr>
				</tfoot>
			</table>
		</div>
	{:else}
		<div class="px-1 mx-auto w-full text-center md:px-8 md:w-3/4 min-h-max">
			<p class="text-lg">No account found.</p>
		</div>
	{/if}
</main>
