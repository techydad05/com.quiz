<script>
	let isExpandedFirst = false;
	let isSecondContainerUp = false;
	let isSecondContainerMiddle = true;
	let isSecondContainerDown = false;

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
				<button class="btn btn-primary z-10" on:click={() => (isExpandedFirst = !isExpandedFirst)}>
					{isExpandedFirst ? "Collapse First" : "Expand First"}
				</button>
			</div>
		</div>
		<div class="w-full h-full bg-gray-500 flex flex-col">
			<div class="w-full h-[300vh] flex flex-col transition-transform duration-500 ease-in-out" class:translate-y-0={isSecondContainerUp} class:translate-y-[-66.67%]={isSecondContainerDown} class:translate-y-[-33.33%]={isSecondContainerMiddle}>
				<div class="h-screen bg-gray-400">
					<h2>Top Section</h2>
					<button class="btn" on:click={moveSecondContainerMiddle}>Back</button>
				</div>
				<div class="h-screen bg-gray-500 flex justify-center items-center gap-4">
					<h2>Middle Section</h2>
					<div>
						<button class="btn" on:click={moveSecondContainerUp}>Up</button>
						<button class="btn" on:click={moveSecondContainerDown}>Down</button>
						<button class="btn" on:click={() => (isExpandedFirst = !isExpandedFirst)}>
							{isExpandedFirst ? "Collapse First" : "Expand First"}
						</button>
					</div>
				</div>
				<div class="h-screen bg-gray-600">
					<h2>Bottom Section</h2>
					<button class="btn" on:click={moveSecondContainerMiddle}>Back</button>
				</div>
			</div>
		</div>
	</div>
</div>