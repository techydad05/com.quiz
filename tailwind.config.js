import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts,tsx}"],

	theme: {
		extend: {}
	},

	plugins: [
		require("@tailwindcss/typography"),
		daisyui
	]
};
