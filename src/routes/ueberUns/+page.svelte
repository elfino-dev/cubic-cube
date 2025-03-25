<script>
    import './../../css/global.css';
	import Footer from './../Footer.svelte';
    import AboutUsHeader from './AboutUsHeader.svelte';
    import AboutUsInfo from './AboutUsInfo.svelte';
    import AboutUsTiles from './AboutUsTiles.svelte';
    import Cta from '../CTA.svelte';
    import cta1 from '$lib/assets/images/Cta/background1.png';
    import StickyHeader from '../StickyHeader.svelte'; 
</script>

<div class="contentWrapper">
    <div class="content">
        <AboutUsHeader leftSquareColor="#587278" rightSquareColor="#DE995B"></AboutUsHeader>
        <AboutUsInfo></AboutUsInfo> 
        <AboutUsTiles></AboutUsTiles>
        <Cta imgSrc="{cta1}" content="Wir gestalten Ihren Laderaum nach Ihren Anforderungen "></Cta>
    </div>
    <div class="footer">
        <Footer></Footer>
    </div>
    <StickyHeader></StickyHeader>
</div>

<style>
    .contentWrapper{
        background-color: var(--colors-color2);
    }
</style>