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
		class="py-2 px-4 w-full rounded-sm border-none transition-all duration-300 appearance-none outline-none focus:outline focus:outline-zinc-800 bg-zinc-50 text-zinc-800 placeholder:text-zinc-500"
		{type}
		{name}
		id={name}
		{placeholder}
		{required}
	/>
</div>
