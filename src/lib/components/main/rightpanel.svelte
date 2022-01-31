<script>
    

    // import userStore from '../../../stores/UserStore'

    // userStore.subscribe(data => {
    //     storeddata = data;
    // })

    
    import { userStore } from '../../../stores/store';


    // userStore.subscribe(user => {user = storedvalue});

</script>

<main>
    <div class="h-[calc(100vh-40px)] bg-slate-200 rounded-md border border-slate-300 backdrop-blur-md px-5 py-4">
        <p>{ $userStore }</p>
    </div>
</main>

<!-- https://www.twilio.com/blog/svelte-stores-share-data-between-components -->