<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import Modal from '$lib/components/Modal.svelte'
	import TextInput from '$lib/components/TextInput.svelte'
	import SelectInput from '$lib/components/SelectInput.svelte'
	import type { AccountList } from '$lib'

	interface Props {
		data: AccountList
	}

	const { data }: Props = $props()

	let accounts = $state(data.accounts)
	// let accounts = null
	let modalState = $state(false)
	const modalStateHandler = () => {
		modalState = !modalState
	}
</script>

<svelte:head>
	<title>Accounts | Fintraq</title>
</svelte:head>

{#snippet dataRow(name: string, balance: number, type: string)}
	<p class="grid grid-cols-3 p-4 w-full">
		<span>{name}</span>
		<span>{balance}</span>
		<span>{type}</span>
	</p>
{/snippet}

<main class="w-full space-y-12 px-1 py-16 mx-auto min-h-screen md:px-4">
	<header class="flex flex-row justify-between items-center mx-auto w-full md:w-3/4">
		<h1 class="text-2xl font-bold">Accounts</h1>
		<Button type="button" onClick={modalStateHandler}
			><i class="fa-solid fa-plus"></i><span class="ml-2">Add account</span></Button
		>
	</header>
	{#if accounts}
		<div
			class="px-1 py-4 w-full rounded-sm divide-y-2 md:px-8 mx-auto bg-slate-200 md:w-3/4 divide-zinc-300"
		>
			<p class="grid grid-cols-3 p-4 w-full text-lg font-semibold">
				<span>Name</span>
				<span>Balace</span>
				<span>Type</span>
			</p>
			{#each accounts as account}
				{@render dataRow(account.name, account.balance, account.type)}
			{/each}
		</div>
	{:else}
		<div class="w-full px-1 md:px-8 md:w-3/4 text-center mx-auto min-h-max">
			<p class="text-lg">No account found.</p>
		</div>
	{/if}
	<Modal title="Add account" isOpen={modalState}>
		<form action="?/add" class="space-y-3">
			<TextInput name="name" type="text" placeholder="Account name"></TextInput>
			<TextInput name="balance" type="text" placeholder="Initial balance"></TextInput>
			<SelectInput name="type" options={['Checking', 'Saving']}></SelectInput>
			<div class="space-x-2">
				<Button type="button" isOutline onClick={modalStateHandler}>Cancel</Button>
				<Button type="submit"
					><i class="fa-solid fa-plus"></i><span class="ml-2">Submit</span></Button
				>
			</div>
		</form>
	</Modal>
</main>
