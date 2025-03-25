<script>
    import Teaser from './SectionTeaser.svelte';
    import Highlight from './SectionHighlight.svelte';
    import AboutUs from './AboutUs.svelte';
    import OurService from './OurService.svelte';
    import '../css/global.css';
	import Cta from './CTA.svelte';
	import SpecialCars from './SpecialCars.svelte';
	import Testemonials from './Testemonials.svelte';
    import Team from './Team.svelte';
	import WhyChooseUs from './WhyChooseUs.svelte';
	import Footer from './Footer.svelte';
    import AnimatingHeader from './AnimatingHeader.svelte';
    
    import cta1 from '$lib/assets/images/Cta/background1.png';
    import cta2 from '$lib/assets/images/Cta/background2.png';
</script>

<div class="contentWrapper">
    <div class="content">
        <Teaser></Teaser>
        <Highlight customClass=""></Highlight>
        <AboutUs customClass=""></AboutUs>
        <OurService customClass=""></OurService> 
        <Cta imgSrc="{cta1}" buttonLink="/jetzt-entdecken.html" content="Die Idee, eines modularen Koffers war so bestechend, dass wir ihn bauen mussten."></Cta>
        <SpecialCars customClass=""></SpecialCars>
        <Testemonials></Testemonials>
        <Cta imgSrc="{cta2}" content="Unser Anspruch ist es, die Zukunft mit innovativen Ideen zu gestalten und den Anforderungen des Marktes einen Schritt voraus zu sein." subtext="Frank Rittmann, Geschäftsführer"></Cta>
        <WhyChooseUs></WhyChooseUs>
    </div>
    <AnimatingHeader></AnimatingHeader>
    <div class="footer">
        <Footer></Footer>
    </div>
</div>

<style>
    .contentWrapper{
        background: linear-gradient(311.26deg, #203238 59.55%, #41707F 118.4%) !important;
    }
</style>