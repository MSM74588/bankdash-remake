<script>
    // import VirtualList from '@sveltejs/svelte-virtual-list';
    // https://gist.github.com/silentworks/d6909f77da67d9db0f2825992d036ec2

    import { hotkey } from "svelte-gh-hotkey";
    import Listitem from "../listitem.svelte";
    import { onMount } from 'svelte';
    let users = []
    

    onMount(async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        users = await response.json()
        console.log(users)
    })

    // IMPLEMENT THIS WITH API ROUTES/ THIS IS INSECURE
    // https://youtu.be/0gor32MSyiA

    // async function fetchUser() {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //     users = await response.json()
    //     console.log(users)
    // }

    // onMount(() => {
    //     fetchUser()
    // })
//    TASK: Setup pagination
let active = false;
let searchkey = '/'
</script>

<main>
    <div class="w-full h-full shadow-xl backdrop-blur-md ">
       <div class="container ">

        <div class=" bg-slate-50 px-7 py-5 rounded-t-md flex">
            <label class="relative block grow  " >
                <span class="sr-only ">Search</span>
                <span class="absolute inset-y-0 left-0 flex items-center pl-2 ">
                  <svg class="h-5 w-5  bg-transparent {active ? 'text-white' : 'text-slate-400'} transition" viewBox="2 2 20 20" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <!-- <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> -->
                  </svg>
                </span>
                <input class="placeholder:italic placeholder:opacity-70 block w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm 
                {active ? 'bg-blue-400' : ''} transition  focus:placeholder:text-white focus:text-white font-medium" 
                placeholder="Search for User - '/' to focus" type="text" name="search" on:focus="{() => active = !active}" on:blur="{() => active = !active}" use:hotkey={searchkey}/>
              </label>

              <div class="refresh-btn p-2 ml-3 text-slate-400 hover:text-slate-500 transition " >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>    
              </div>

              


        </div>
        <div class="bg-[#ffffffab] px-5 pt-5 pb-7  rounded-b-md max-h-[87vh] overflow-y-auto flex flex-col gap-y-2 will-change-auto">
          
            <!-- <Listitem />
            <Listitem />
            <Listitem />
            <Listitem />
            <Listitem />
            <Listitem />
            <Listitem /> -->

            <!-- <VirtualList items={users} let:user >
                <Listitem name={user.name} />
              </VirtualList> -->

              <!-- CREATE A TOP ROW with FLEX for title -->

              {#each users as user (user.id)}
                <Listitem name={user.name} />
                {:else}
                <Listitem name="Loading..." />
              {/each}
              
        </div>
       </div>
    </div>
</main>

<!-- TODO: Issue with max-h of 100vh and vw -->
<!-- https://svelte.dev/repl/a138b0c8579b4fc8bdde842a9d922b1f?version=3.17.1 -->