<script>
	import "../app.css";
	import "$styles/app.css";
	import Header from "$components/Header.svelte";
	import "../app.css";

	const specialWords = [
		{ text: "idiot", size: "text-6xl md:text-8xl" },
		{ text: "ἰδιώτης", size: "text-5xl md:text-7xl" },
		{ text: "idiōtēs", size: "text-4xl md:text-6xl" },
		{ text: "private", size: "text-5xl md:text-7xl" },
		{ text: "public", size: "text-5xl md:text-7xl" },
		{ text: "affairs", size: "text-4xl md:text-6xl" },
		{ text: "polis", size: "text-3xl md:text-5xl" },
		{ text: "citizenship", size: "text-4xl md:text-6xl" },
		{ text: "society", size: "text-5xl md:text-7xl" }
	];

	const fullText = `In ancient Greece, the term "idiot" (ἰδιώτης, idiōtēs) had a very different meaning from what it does today. It originally referred to a private individual, someone who was not involved in public affairs or the governance of the city-state (polis). The word derives from "idios," meaning "private" or "one's own." An "idiot" in ancient Greek society was essentially a person who focused on their private life and interests, rather than participating in public life, politics, or civic duties. This term carried a negative connotation because the Greeks highly valued active participation in public affairs and viewed it as a key aspect of citizenship and contributing to the common good. Therefore, an "idiot" was seen as someone who was disengaged and uninvolved in the civic and communal responsibilities of society.`;

	function applySpecificSizes(text, defaultSize = "text-xl") {
		const words = text
			.replace(/[^a-zA-Z0-9\s\u0370-\u03FF\u1F00-\u1FFF]/g, "")
			.split(" ");
		const specialWordsMap = new Map(
			specialWords.map((w) => [w.text.toLowerCase(), w])
		);

		return words
			.map((word, index) => {
				const size =
					specialWordsMap.get(word.toLowerCase())?.size || defaultSize;
				return `<span id="word-${index}" class="${size} word ml-[5px]">${word}</span>`;
			})
			.join("");
	}

	const sizedFullText = applySpecificSizes(fullText, "text-2xl md:text-4xl");
</script>

<!-- <Header /> -->
<div
	class="word-container bg-base-100 text-sky-600 overflow-hidden absolute inset-0 flex flex-wrap content-start p-2 md:p-4 opacity-30"
>
	{@html sizedFullText}
</div>
<main id="content">
	<slot></slot>
</main>
