<script lang="ts">
    import '../css/global.css';
    import CarConfigurationBox  from './CarConfigurationBox.svelte';
    import AdornerBox  from './AdornerBox.svelte';
    
    import car1 from '$lib/assets/images/OurServices/KC M MD rechts@4x.svg';
    import car2 from '$lib/assets/images/OurServices/KC L HD rechts@4x.svg';

    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';    

    onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to('.box1', {
            scrollTrigger: 
            {
                trigger: '.box1',
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "restart pause reverse pause",
                scrub: 0.1
            },
            bottom: 100,
            right: 300,
            opacity: 1
        });

        gsap.to('.box2', {
            scrollTrigger: 
            {
                trigger: '.box2',
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "restart pause reverse pause",
                scrub: 0.1
            },
            bottom: 100,
            right: 100,
            opacity: 1
        });

        gsap.to('.box3', {
            scrollTrigger: 
            {
                trigger: '.box3',
                start: "top 80%",
                end: "bottom 40%",
                toggleActions: "restart pause reverse pause",
                scrub: 0.1
            },
            bottom: -100,
            right: 100,
            opacity: 1
        });

        gsap.to('.box4', {
            scrollTrigger: 
            {
                trigger: '.box4',
                start: "top 80%",
                end: "bottom 40%",
                toggleActions: "restart pause reverse pause",
                scrub: 0.1
            },
            bottom: -100,
            right: -100,
            opacity: 1
        });
	});

    let { customClass = '' } = $props();
    
</script>

<div class="pageWrapper">
    <div class="pageContent">
        <p class="fontStyleH6 fontColorC3 smallHeadline">Unsere Spezialkoffer</p>
        <p class="fontStyleH3 fontColorLight largeHeadline">Die Kofferlösung für Rohrreiniggungs- <br/>und Inspektionsfahrzeuge</p>
        
            <div class="specialCars {customClass}">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <AdornerBox customClass="box1" customStyle="position: absolute; bottom: 300px; right: 500px; opacity: 0"></AdornerBox>
                <AdornerBox customClass="box2" customStyle="position: absolute; bottom: 300px; right: -100px; opacity: 0"></AdornerBox>
                <AdornerBox customClass="box3" customStyle="position: absolute; bottom: -100px; right: 700px; opacity: 0"></AdornerBox>
                <AdornerBox customClass="box4" customStyle="position: absolute; bottom: -150px; right: -150px; opacity: 0"></AdornerBox>
                <CarConfigurationBox link="/modelle#inspektionsFahrzeugTVWagen" title="CubicCube" buzzwords="Inspektionsfahrzeug (TV-Wagen)" description="Modularer Kofferaufbau als Hochdachfür einen mittleren Radstand." imgSrc={car1}></CarConfigurationBox>
                <CarConfigurationBox link="/modelle" title="CubicCube" buzzwords="Spülfahrzeug" description="Modularer Kofferaufbau als Hochdach für einen langen Radstand." imgSrc={car2}></CarConfigurationBox>
                <CarConfigurationBox link="/modelle#inspektionsUndSpuelfahrzeug" title="CubicCube" buzzwords="Inspektions- und Spülfahrzeug" description="Modularer Kofferaufbau als Hochdach für einen langen Radstand." imgSrc={car2}></CarConfigurationBox>
            </div>
        </div>
    </div>
</div>

<style>
    .pageWrapper{
        position: relative;
    }

    .specialCars
    {
        margin-top: 50px;
    }
</style>