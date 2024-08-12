<script>
	import { getContext } from "svelte";
	import Demo from "$components/demo/Demo.svelte";
	// import Footer from "$components/Footer.svelte";
	const copy = getContext("copy");
	const data = getContext("data");
</script>

<!-- remove and setup with a kitchen sink or something for the demo from daisuyui -->
<Demo />
<!-- <Footer /> -->
