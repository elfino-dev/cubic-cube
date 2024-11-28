<script>
    import Header from './SectionHeader.svelte';
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
</script>


<Header customClass=""></Header>
<Teaser></Teaser>
<Highlight customClass=""></Highlight>
<AboutUs customClass=""></AboutUs>
<OurService customClass=""></OurService> 
<Cta buttonContext="Jetzt entdecken!" buttonLink="/jetzt-entdecken.html" content="Die Idee, eines modularen Koffers war so bestechend, dass wir ihn bauen mussten."></Cta>
<SpecialCars customClass=""></SpecialCars>
<Testemonials></Testemonials>
<Team></Team>
<Cta content="Unser Anspruch ist es, die Zukunft mit innovativen Ideen zu gestalten und den Anforderungen des Marktes einen Schritt voraus zu sein." subtext="Frank Rittmann, Geschäftsführer"></Cta>
<WhyChooseUs></WhyChooseUs>
<Footer></Footer>


<style>
    
</style>