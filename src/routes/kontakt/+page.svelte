<script>
    import Header from './../SectionHeader.svelte';
    import './../../css/global.css';
	import Footer from './../Footer.svelte';
    import KontaktHeader from './KontaktHeader.svelte';
    import KontaktFrame from './KontaktFrame.svelte';
    import KontaktMap from './KontaktMap.svelte';
</script>

<div class="contentWrapper">
    <div class="content">
        <Header customClass=""></Header>
        <KontaktHeader leftSquareColor="#DE995B" rightSquareColor="#A6D760"></KontaktHeader>
        <KontaktFrame></KontaktFrame>
        <KontaktMap></KontaktMap>
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