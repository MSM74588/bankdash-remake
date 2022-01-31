<script>
    import Listitem from "../listitem.svelte";
</script>

<main>
    <div class="w-full h-full shadow-xl backdrop-blur-md ">
       <div class="container">
        <div class="h-30 bg-slate-50 px-10 py-5 rounded-t-md">
            <p>hello</p>
        </div>
        <div class="bg-[#ffffffab] px-5 py-5  rounded-b-md pb-3 ">
            <Listitem />
            <Listitem />
            <Listitem />
            <Listitem />
            <Listitem />
            <Listitem />
            <Listitem />
        </div>
       </div>
    </div>
</main>

<!-- TODO: Issue with max-h of 100vh and vw -->