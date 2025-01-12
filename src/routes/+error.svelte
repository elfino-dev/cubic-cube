<script>
    import Header from './SectionHeader.svelte';
	import Footer from './Footer.svelte';
    import ErrorPage from './ErrorPage.svelte';
</script>


<div class="contentWrapper">
    <div class="content">
        <Header customClass=""></Header>
        <ErrorPage></ErrorPage>
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