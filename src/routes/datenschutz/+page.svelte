<script>
    import Header from './../SectionHeader.svelte';
    import './../../css/global.css';
	import Footer from './../Footer.svelte';
    import KontaktFrame from './DatenschutzBody.svelte';
	import DatenschutzeHeader from './DatenschutzeHeader.svelte';
    import DatenschutzeBody from './DatenschutzBody.svelte';
</script>

<div class="contentWrapper">
    <div class="content">
        <Header customClass=""></Header>
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