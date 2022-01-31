<script>
    export let cardText = "text"
    export let value = 0
    export let gradient = "linear-gradient(to top, #ff0844 0%, #ffb199 100%)"
</script>

<main>
    <div class="rounded-lg px-5 py-6  w-full my-5 shadow-2xl hover:shadow-xl transition card-gradient border border-gray-300">
        <h1 class="text-xl font-semibold pb-2">{cardText}:</h1>
        <h1 class="text-4xl font-extrabold text-transparent bg-clip-text text-gradient" style=" --gradient: {gradient}">₹ {value}</h1>
    </div>
</main>

<style>
    .card-gradient{
		background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);

    }
    .text-gradient{
        background-image: var(--gradient);
    }
</style>