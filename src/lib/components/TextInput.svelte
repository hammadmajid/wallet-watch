<script lang="ts">
	export let name: string
	export let type: 'text' | 'password' | 'email'
	export let placeholder: string
	export let required: boolean = true
</script>

<div class="w-full">
	<label for={name} class="sr-only">{name}</label>
	<input
		class="px-4 py-2 w-full rounded-sm border-none transition-all duration-300 appearance-none outline-none focus:outline focus:outline-zinc-800 bg-zinc-50 text-zinc-800 placeholder:text-zinc-500"
		{type}
		{name}
		id={name}
		{placeholder}
		{required}
	/>
</div>
