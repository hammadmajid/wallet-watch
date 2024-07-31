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
	<input class="outline-none focus:outline focus:outline-zinc-800 border-none rounded-sm bg-zinc-50 text-zinc-800 placeholder:text-zinc-500 w-full px-4 py-2" {type} {name} id={name} {placeholder} {required} />
</label>
