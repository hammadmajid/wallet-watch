<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let buttonType: 'primary' | 'warning' | 'danger' | 'disabled';

	export let text: string;
	export { buttonType as type };
</script>

<button on:click={() => dispatch('click')} class={'btn btn-' + buttonType}>{text}</button>

<style>
	.btn {
		padding: 1rem;
		border-radius: 8px;
		border: none;
		font-size: 1rem;
		font-weight: bold;
		transition: background-color 250ms;
		color: var(--color-crust);
	}

	.btn:hover {
		cursor: pointer;
	}

	.btn-primary {
		background-color: var(--color-sky);
	}

	.btn-primary:hover {
		background-color: var(--color-sapphire);
	}

	.btn-warning {
		background-color: var(--color-yellow);
	}
	.btn-warning:hover {
		background-color: var(--color-peach);
	}

	.btn-danger {
		background-color: var(--color-maroon);
	}

	.btn-danger:hover {
		background-color: var(--color-red);
	}

	.btn-disabled {
		background-color: var(--color-overlay2);
	}
	.btn-disabled:hover {
		cursor: not-allowed;
	}
</style>
