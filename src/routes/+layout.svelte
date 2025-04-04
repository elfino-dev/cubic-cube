<script lang="ts">
	import '../app.css';
	import '../css/cookieconsent.css';
	let { children } = $props();
    import StickyHeaderMobile from './StickyHeaderMobile.svelte';

	import Recaptcha from "$lib/recaptcha/recaptcha.svelte";
</script>

<StickyHeaderMobile></StickyHeaderMobile>
<Recaptcha />

{@render children()}