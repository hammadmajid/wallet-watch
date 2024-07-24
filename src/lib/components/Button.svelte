<script lang="ts">
	interface Props {
		type: 'button' | 'span';
		style: 'primary' | 'secondary' | 'warning' | 'danger' | 'disabled';
		text: string;
		action?: () => void;
	}

	let { type, style, text, action }: Props = $props();
</script>

{#if type === 'button'}
	<button
		onclick={() => {
			if (action) {
				action();
			}
		}}
		class={'btn btn-' + style}>{text}</button
	>
{:else}
	<span class={'btn btn-' + style}>{text}</span>
{/if}

<style>
	.btn {
		display: block;
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
