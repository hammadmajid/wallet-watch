<script lang="ts">
	export let name: string;
	export let type: 'text' | 'password' | 'email';
	export let placeholder: string;
	export let required: boolean = true;
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
