<script>
	import { onMount } from "svelte";
	import { ChevronDown, ChevronUp } from "lucide-svelte";
	import Quiz from "./Quiz.svelte";
	import questions from "../data/questions";
	import { Confetti } from "svelte-confetti";
	let isExpandedFirst = false;
	let isSecondContainerUp = false;
	let isSecondContainerMiddle = true;
	let isSecondContainerDown = false;
	let showConfetti = false;

	const fullText = `In ancient Greece, the term "idiot" (ἰδιώτης, idiōtēs) had a very different meaning from what it does today. It originally referred to a private individual, someone who was not involved in public affairs or the governance of the city-state (polis). The word derives from "idios," meaning "private" or "one's own." An "idiot" in ancient Greek society was essentially a person who focused on their private life and interests, rather than participating in public life, politics, or civic duties. This term carried a negative connotation because the Greeks highly valued active participation in public affairs and viewed it as a key aspect of citizenship and contributing to the common good. Therefore, an "idiot" was seen as someone who was disengaged and uninvolved in the civic and communal responsibilities of society.`;

	function moveSecondContainerUp() {
		isSecondContainerUp = true;
		isSecondContainerMiddle = false;
	}

	function moveSecondContainerDown() {
		isSecondContainerDown = true;
		isSecondContainerMiddle = false;
		resetQuiz();
		startCountdown();
	}

	function moveSecondContainerMiddle() {
		isSecondContainerMiddle = true;
		isSecondContainerUp = false;
		isSecondContainerDown = false;
		resetQuiz();
	}

	let showCountdown = false;
	let showQuiz = false;
	let countdownProgress = 100;
	let countdownInterval;

	function startCountdown() {
		showCountdown = true;
		showQuiz = false;
		countdownProgress = 100;
		clearInterval(countdownInterval); // Clear any existing interval
		countdownInterval = setInterval(() => {
			countdownProgress -= 1;
			if (countdownProgress <= 0) {
				clearInterval(countdownInterval);
				showCountdown = false;
				showQuiz = true;
			}
		}, 100);
	}

	function resetQuiz() {
		clearInterval(countdownInterval);
		showCountdown = false;
		showQuiz = false;
		countdownProgress = 100;
	}

	function showMenu() {
		isExpandedFirst = true;
		setTimeout(() => {
			showConfetti = true;
		}, 500);
	}
	
	function hideMenu() {
		isExpandedFirst = false;
		showConfetti = false;
	}

	onMount(() => {
		return () => {
			clearInterval(countdownInterval); // Clean up on component unmount
		};
	});
</script>

<div class="h-screen w-screen overflow-hidden">
	<div
		class="h-full w-[200%] flex transition-transform duration-500 ease-in-out overflow-hidden"
		class:translate-x-[-50%]={isExpandedFirst}
	>
		<div class="w-full h-full">
			<div class="h-full w-full flex flex-col justify-center items-center">
				<button class="btn btn-outline btn-primary z-10" on:click={showMenu}>
					Am I the Idiot?
				</button>
			</div>
		</div>
		<div class="w-full h-full flex flex-col">
			<div
				class="w-full h-[300vh] flex flex-col transition-transform duration-500 ease-in-out"
				class:translate-y-0={isSecondContainerUp}
				class:translate-y-[-66.67%]={isSecondContainerDown}
				class:translate-y-[-33.33%]={isSecondContainerMiddle}
			>
				<!-- top section -->
				<div
					class="h-screen flex flex-col justify-center items-center overflow-y-scroll"
				>
					<div class="hero min-h-screen p-4">
						<div class="hero-content flex-col lg:flex-row">
							<!-- svelte-ignore a11y_missing_attribute -->
							<img
								src="/ai-civics.png"
								class="max-w-sm rounded-lg shadow-2xl"
							/>
							<div>
								<h1 class="text-2xl md:text-3xl lg:text-5xl font-bold">
									The History of the Word "Idiot"
								</h1>
								<p class="py-6 text-lg md:text-xl lg:text-2xl">
									{fullText}
								</p>
								<!-- svelte-ignore a11y_no_static_element_interactions -->
								<!-- svelte-ignore a11y_click_events_have_key_events -->
								<div
									class="w-full flex justify-center items-center cursor-pointer"
									on:click={moveSecondContainerMiddle}
								>
									<ChevronDown size={64} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- middle section -->
				<div class="h-screen flex justify-center items-center gap-4">
					<div class="hero min-h-screen">
						<div class="hero-content text-center">
							<div class="max-w-md space-y-4 relative">
								<h1 class="text-5xl font-bold">Am I an Idiot?</h1>
								<p class="py-6">
									In ancient Greece, the term "idiot" had a
									very different meaning from what it does today. If you would
									like to learn more about the history of the word "idiot" and
									its meaning, click the button below.
								</p>
								{#if showConfetti}
									<div class="confetti absolute left-1/2">
										<Confetti
											y={[1.2, 1.45]}
											x={[-0.95, -0.3]}
											colorArray={["white"]}
											size="5"
										/>
										<Confetti
											y={[1.45, 1.5]}
											x={[-0.25, 1]}
											colorArray={["#bf0d3e"]}
											amount="70"
										/>
										<Confetti
											y={[1.4, 1.45]}
											x={[-0.25, 1]}
											colorArray={["white"]}
											amount="70"
										/>
										<Confetti
											y={[1.35, 1.4]}
											x={[-0.25, 1]}
											colorArray={["#bf0d3e"]}
											amount="70"
										/>
										<Confetti
											y={[1.3, 1.35]}
											x={[-0.25, 1]}
											colorArray={["white"]}
											amount="70"
										/>
										<Confetti
											y={[1.25, 1.3]}
											x={[-0.25, 1]}
											colorArray={["#bf0d3e"]}
											amount="70"
										/>
										<Confetti
											y={[1.2, 1.25]}
											x={[-0.25, 1]}
											colorArray={["white"]}
											amount="70"
										/>
										<Confetti
											y={[1.15, 1.2]}
											x={[-0.25, 1]}
											colorArray={["#bf0d3e"]}
											amount="70"
										/>
										<Confetti
											y={[1.1, 1.15]}
											x={[-1, 1]}
											colorArray={["white"]}
											amount="70"
										/>
										<Confetti
											y={[1.05, 1.1]}
											x={[-1, 1]}
											colorArray={["#bf0d3e"]}
											amount="70"
										/>
										<Confetti
											y={[1, 1.05]}
											x={[-1, 1]}
											colorArray={["white"]}
											amount="70"
										/>
										<Confetti
											y={[0.95, 1]}
											x={[-1, 1]}
											colorArray={["#bf0d3e"]}
											amount="70"
										/>
										<Confetti
											y={[0.9, 0.95]}
											x={[-1, 1]}
											colorArray={["white"]}
											amount="70"
										/>
										<Confetti
											y={[0.85, 0.9]}
											x={[-1, 1]}
											colorArray={["#bf0d3e"]}
											amount="70"
										/>
									</div>
								{/if}
								<button
									class="btn btn-primary w-[98%] ml-3"
									on:click={moveSecondContainerUp}>Learn More</button
								>
								<button
									class="btn btn-secondary w-[98%] ml-3"
									on:click={moveSecondContainerDown}>I'm Ready</button
								>
								<button
									class="btn btn-outline w-[98%] ml-3"
									on:click={hideMenu}>Go Back</button
								>
							</div>
						</div>
					</div>
				</div>
				<div
					class="h-screen flex flex-col justify-center items-center relative"
				>
					<div
						class="absolute top-4 left-1/2 transform -translate-x-1/2 cursor-pointer"
						on:click={moveSecondContainerMiddle}
					>
						<ChevronUp size={64} />
					</div>
					<div class="w-full max-w-2xl px-4 mt-12">
						{#if showCountdown}
							<div class="text-center mb-4 text-2xl">
								Quiz starting in {Math.ceil(countdownProgress / 10)} seconds
							</div>
							<div class="w-full h-8 bg-gray-200 rounded-full overflow-hidden">
								<div
									class="h-full bg-primary transition-all duration-100 ease-linear"
									style="width: {countdownProgress}%"
								></div>
							</div>
						{:else if showQuiz}
							<Quiz {questions} numQuestions={25} timeLimit={6} />
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
