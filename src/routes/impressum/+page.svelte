<script>
    import './../../css/global.css';
	import Footer from '../Footer.svelte';
	import ImpressumHeader from './ImpressumHeader.svelte';
    import ImpressumBody from './ImpressumBody.svelte';
    import StickyHeader from '../StickyHeader.svelte'; 
</script>

<div class="contentWrapper">
    <div class="content">
        <ImpressumHeader leftSquareColor="#587278E5" rightSquareColor="#DE995B"></ImpressumHeader>
        <ImpressumBody/>
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