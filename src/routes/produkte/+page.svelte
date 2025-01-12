<script>
    import Header from './../SectionHeader.svelte';
    import './../../css/global.css';
	import Footer from './../Footer.svelte';
    import ProdukteHeader from './ProdukteHeader.svelte';
    import ProdukteFrame from './ProdukteFrame.svelte';
    import ProdukteSpecifications from './ProdukteSpecifications.svelte';

    import productsCar from '$lib/assets/images/Produkte/ProdukteCar.png';
</script>

<div class="contentWrapper">
    <div class="content">
        <Header customClass=""></Header>
        <ProdukteHeader leftSquareColor="#587278" rightSquareColor="#DE995B"></ProdukteHeader>
        <ProdukteFrame></ProdukteFrame>
        <ProdukteSpecifications></ProdukteSpecifications>
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