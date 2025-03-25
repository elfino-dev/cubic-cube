<script>
    import './../../css/global.css';
	import Footer from '../Footer.svelte';
    import ProdukteHeader from './ProdukteHeader.svelte';
    import ProdukteSpecifications from './ProdukteSpecifications.svelte';
    import StickyHeader from '../StickyHeader.svelte'; 
</script>

<div class="contentWrapper">
    <div class="content">
        <ProdukteHeader leftSquareColor="#587278" rightSquareColor="#DE995B"></ProdukteHeader>
        <ProdukteSpecifications></ProdukteSpecifications>
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