// @ts-check
import { join } from 'path'
import { skeleton } from '@skeletonlabs/tw-plugin'
import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},
	plugins: [
		skeleton({
			themes: { preset: ['hamlindigo'] }
		}),
		forms
	]
}
