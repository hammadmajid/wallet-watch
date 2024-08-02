<script lang="ts">
	interface Props {
		name: string;
		type: 'text' | 'password' | 'email';
		placeholder: string;
		required?: boolean;
	}

	let { name, type, placeholder, required = true }: Props = $props();
</script>

<div class="w-full">
	<label for={name} class="sr-only">{name}</label>
	<input
		class="appearance-none outline-none focus:outline focus:outline-zinc-800 transition-all duration-300 border-none rounded-sm bg-zinc-50 text-zinc-800 placeholder:text-zinc-500 w-full px-4 py-2"
		{type}
		{name}
		id={name}
		{placeholder}
		{required}
	/>
</div>
