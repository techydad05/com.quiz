<script>
	import { browser } from "$app/environment";
	import Index from "$components/Index.svelte";
	import { setContext } from "svelte";
	import Meta from "$components/Meta.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	import Containers from "$components/Containers.svelte";

	export let data;

	version();

	const preloadFont = [
		// "https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Regular.woff2",
		// "https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Bold.woff2",
		// "https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Regular-Web.woff2",
		// "https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Bold-Web.woff2"
	];

	const { title, description, url, keywords } = copy;
	setContext("copy", copy);
	setContext("data", data.data);
</script>

<Meta {title} {description} {url} {preloadFont} {keywords} />
<Containers />
<!-- <Index /> -->
