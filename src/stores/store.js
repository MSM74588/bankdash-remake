import { writable, derived } from "svelte/store";

export const userStore = writable("Select User");

// export const userStoreArray = writable("Select User");
// Later Modify this and integrate

// export const fetchUser = async() => {
//     const url = 'https://jsonplaceholder.typicode.com/users'
//     const response = await fetch(url)
//     users = await response.json()
//     console.log(users)
//     return users
// }