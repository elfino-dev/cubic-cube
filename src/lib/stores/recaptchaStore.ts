import { writable } from "svelte/store";

export const recaptchaToken = writable<string | null>(null);