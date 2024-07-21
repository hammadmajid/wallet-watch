<script lang="ts">
	interface Props {
		name: string;
		type: 'text' | 'password' | 'email';
		placeholder: string;
		required?: boolean;
	}

	let {
		name,
		type,
		placeholder,
		required = true
	}: Props = $props();
</script>

<label for={name}>
	<input {type} {name} id={name} {placeholder} {required} />
</label>

<style>
	input {
		font-size: 1.1rem;
		outline: none;
		border: none;
		border-radius: 8px;
		width: 100%;
		padding: 1rem;
		background-color: var(--color-base);
		color: var(--color-text);
	}

	input::placeholder {
		color: var(--color-subtext1);
	}
</style>
