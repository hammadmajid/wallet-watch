<script lang="ts">
	interface Props {
		type: 'primary' | 'warning' | 'danger' | 'disabled';
		text: string;
		action: Function;
	}

	let { type, text, action }: Props = $props();
</script>

<button onclick={() => action()} class={'btn btn-' + type}>{text}</button>

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
