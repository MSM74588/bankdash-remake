<script>
    import Button from '$lib/components/button.svelte';
	import Card from '$lib/components/card.svelte';
    export let logosrc = "$lib/assets/logo-outline.png"
</script>

<main>
    <!-- SOmething -->
    <div class="logo flex items-center my-10  hover:cursor-pointer">
        <img src={logosrc} alt="Logo" class="w-20 float-left" />
        <h1
            class="text-4xl font-semibold ml-5 underline decoration-orange-500 transition hover:decoration-dashed"
        >
            BankDash 2.0
        </h1>
    </div>

    <div class="container ">
        <Button buttonText="MSM" />
    </div>

    <div class="container">
        <h1 class="font-semibold text-2xl pt-10 pd-5">Today's Activity:</h1>
        <Card cardText="Transaction" gradient="linear-gradient(-60deg, #ff5858 0%, #f09819 100%)"/>
        <Card cardText="Deposit" gradient="linear-gradient(-60deg, #0fd850 0%, #f9f047 100%"/>
        <Card cardText="Withdrawal" gradient="linear-gradient(to top, #b224ef 0%, #7579ff 100%)"/>
    </div>

    <div class="b-0 w-full absolute bottom-6">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 [color:#212121]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
        </svg>
    </div>
</main>