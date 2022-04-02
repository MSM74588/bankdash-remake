<script>
// import { onMount } from 'svelte';
    
    export let name

    import { userStore } from '../../stores/store';

    export let updateUser = () => {
        userStore.set(name)
        // working, but only for single value, now set it as an array

        console.log(name)
    }

</script>

<main>
    <div class="p-5 bg-[#bbc5da7e] rounded border border-slate-300 hover:shadow-md   
    hover:ring hover:ring-inset active:ring-2  active:ring-slate-400 active:ring-inset hover:cursor-pointer active:bg-[#9fa9b97e]
    " on:click="{updateUser}">
        <h1>{name}</h1>
    </div>
    <!-- Use flex to postion side by side cells -->
    <!-- also add a good icon and use devides -->
    <!-- Place content, space between -->
</main>