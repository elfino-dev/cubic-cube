<script lang="ts">
	import '../app.css';
	import '../css/cookieconsent.css';
	let { children } = $props();
    import StickyHeaderMobile from './StickyHeaderMobile.svelte';
</script>

<StickyHeaderMobile></StickyHeaderMobile>

{@render children()}