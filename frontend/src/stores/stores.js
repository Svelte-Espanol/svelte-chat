import { writable } from "svelte/store";

export const hasTheUserChosenAUserName = writable(false);
export const userName = writable({});