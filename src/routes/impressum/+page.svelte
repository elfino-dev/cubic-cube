<script>
    import Header from '../SectionHeader.svelte';
    import './../../css/global.css';
	import Footer from '../Footer.svelte';
	import ImpressumHeader from './ImpressumHeader.svelte';
    import ImpressumBody from './ImpressumBody.svelte';
</script>

<div class="contentWrapper">
    <div class="content">
        <Header customClass=""></Header>
        <ImpressumHeader leftSquareColor="#587278E5" rightSquareColor="#DE995B"></ImpressumHeader>
        <ImpressumBody/>
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