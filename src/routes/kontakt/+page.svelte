<script>
    import './../../css/global.css';
	import Footer from './../Footer.svelte';
    import KontaktHeader from './KontaktHeader.svelte';
    import KontaktFrame from './KontaktFrame.svelte';
    import StickyHeader from '../StickyHeader.svelte'; 
</script>

<div class="contentWrapper">
    <div class="content">
        <KontaktHeader leftSquareColor="#DE995B" rightSquareColor="#A6D760"></KontaktHeader>
        <KontaktFrame></KontaktFrame>
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