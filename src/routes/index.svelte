<script>
	let showText = false;
	// let logosrc = "/logo.png"
	import Left from '$lib/components/main/left.svelte';
	import Listarea from '$lib/components/main/listarea.svelte';
	import Rightpanel from '$lib/components/main/rightpanel.svelte';

	let storeUserName = "MSM"
</script>

<main>
	{#if showText}
		<h1 class="text-4xl">Show text</h1>
	{/if}

	<div class="h-screen w-screen">
		<div class="w-full h-full grid-container">
			<div class="left px-10 left-gradient w-full hidden md:block z-40">
				<Left />
				<!-- <Left logosrc="https://cdn-icons-png.flaticon.com/512/2830/2830284.png"/> -->
			</div>
			<div class="main bg-stone-300 relative">
				<!-- <div class="main bg-stone-300 relative max-h-full overflow-y-scroll"> -->
				<!-- something -->
				<div class="bg-animation  min-h-full min-w-full overflow-hidden absolute blur-3xl z-0">
					<div class="h-full">
						<div class="absolute top-20 -left-4 w-96 h-96 bg-purple-300 rounded-full"></div>
						<div class="absolute top-20 -right-4 w-96 h-96 bg-yellow-300 rounded-full"></div>
						<div class="absolute -bottom-20 left-40 w-96 h-96 bg-pink-300 rounded-full"></div>
					</div>
				</div>

				<div class="p-4 relative">
					<Listarea />
				</div>

				<!--  max-h-[calc(100%-60px)]  -->
			</div>
			<div class="right bg-stone-400 hidden md:block w-96 p-5 [min-height: 100% !important] z-40">
				<!-- Something -->
				<Rightpanel />
			</div>
		</div>
	</div>
</main>

<style scoped>
	.grid-container {
		display: grid;
		grid-template-columns: auto 2fr auto;
		grid-template-rows: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: 'left main right';
	}

	.left {
		grid-area: left;
	}

	.right {
		grid-area: right;
	}

	.main {
		grid-area: main;
	}

	.left-gradient {
		/* background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%); */
		background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
		/* background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); */
		/* background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%); */
		/* background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%); */
	}

	
</style>
