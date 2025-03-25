<script>
    import './../../css/global.css';
	import Footer from './../Footer.svelte';
	import DatenschutzeHeader from './DatenschutzeHeader.svelte';
    import DatenschutzeBody from './DatenschutzBody.svelte';
    import StickyHeader from '../StickyHeader.svelte'; 
</script>

<div class="contentWrapper">
    <StickyHeader></StickyHeader>
    <div class="content">
        <DatenschutzeHeader leftSquareColor="#587278E5" rightSquareColor="#DE995B"></DatenschutzeHeader>
        <DatenschutzeBody/>
    </div>
    <div class="footer">
        <Footer></Footer>
    </div>
</div>

<style>
    .contentWrapper{
        background-color: var(--colors-color2);
    }
</style>