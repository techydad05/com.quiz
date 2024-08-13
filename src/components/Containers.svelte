<script>
	import { X } from "lucide-svelte";
  let isExpandedFirst = false;
	let isSecondContainerUp = false;
	let isSecondContainerMiddle = true;
	let isSecondContainerDown = false;

  const fullText = `In ancient Greece, the term "idiot" (ἰδιώτης, idiōtēs) had a very different meaning from what it does today. It originally referred to a private individual, someone who was not involved in public affairs or the governance of the city-state (polis). The word derives from "idios," meaning "private" or "one's own." An "idiot" in ancient Greek society was essentially a person who focused on their private life and interests, rather than participating in public life, politics, or civic duties. This term carried a negative connotation because the Greeks highly valued active participation in public affairs and viewed it as a key aspect of citizenship and contributing to the common good. Therefore, an "idiot" was seen as someone who was disengaged and uninvolved in the civic and communal responsibilities of society.`;


	function moveSecondContainerUp() {
		isSecondContainerUp = true;
		isSecondContainerMiddle = false;
	}

	function moveSecondContainerDown() {
		isSecondContainerDown = true;
		isSecondContainerMiddle = false;
	}

	function moveSecondContainerMiddle() {
		isSecondContainerMiddle = true;
		isSecondContainerUp = false;
		isSecondContainerDown = false;
	}
</script>

<div class="h-screen w-screen overflow-hidden">
	<div class="h-full w-[200%] flex transition-transform duration-500 ease-in-out overflow-hidden" class:translate-x-[-50%]={isExpandedFirst}>
		<div class="w-full h-full">
			<div class="h-full w-full flex flex-col justify-center items-center">
				<button class="btn btn-outline btn-primary z-10" on:click={() => isExpandedFirst = true}>
					Am I the Idiot?
				</button>
			</div>
		</div>
		<div class="w-full h-full flex flex-col">
			<div class="w-full h-[300vh] flex flex-col transition-transform duration-500 ease-in-out" class:translate-y-0={isSecondContainerUp} class:translate-y-[-66.67%]={isSecondContainerDown} class:translate-y-[-33.33%]={isSecondContainerMiddle}>
        <!-- top section -->
				<div class="h-screen flex flex-col justify-center items-center overflow-y-scroll">
          <div class="hero min-h-screen p-4">
            <div class="hero-content flex-col lg:flex-row">
              <!-- svelte-ignore a11y_missing_attribute -->
              <img src="/ai-civics.png" class="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 class="text-2xl md:text-5xl font-bold">The History of the Word "Idiot"</h1>
                <p class="py-6 text-lg md:text-2xl">
                  {fullText}
                </p>
                <button class="btn btn-ghost absolute top-2 right-2" on:click={moveSecondContainerMiddle}><X /></button>
              </div>
            </div>
          </div>
				</div>
        <!-- middle section -->
				<div class="h-screen flex justify-center items-center gap-4">
          <div class="hero bg-base-200 min-h-screen">
            <div class="hero-content text-center">
              <div class="max-w-md space-y-4">
                <h1 class="text-5xl font-bold">Am I an Idiot?</h1>
                <p class="py-6">
                  In ancient Greece, the term "idiot" (ἰδιώτης, idiōtēs) had a very different meaning from
						what it does today. If you would like to learn more about the history of the word
						"idiot" and its meaning, click the button below.
                </p>
                <button class="btn btn-primary w-full" on:click={moveSecondContainerUp}>Learn More</button>
					<button class="btn btn-secondary w-full" on:click={moveSecondContainerDown}>I'm Ready</button>
					<button class="btn btn-outline w-full" on:click={() => isExpandedFirst = false}>Go Back</button>
              </div>
            </div>
          </div>
				</div>
				<div class="h-screen flex justify-center items-center gap-4">
					<h2>Bottom Section</h2>
					<button class="btn" on:click={moveSecondContainerMiddle}>Back</button>
				</div>
			</div>
		</div>
	</div>
</div>