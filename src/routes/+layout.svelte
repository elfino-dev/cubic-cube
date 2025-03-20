<script lang="ts">
	import '../app.css';
	import '../css/cookieconsent.css';
	let { children } = $props();
	import CookieConsentComponent from '$lib/cookieConsent/cookieconsent.svelte'; 
</script>

{@render children()}

<CookieConsentComponent />