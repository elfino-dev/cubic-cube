<script lang="ts">
    import '../css/global.css';
    import CarConfigurationBox  from './CarConfigurationBox.svelte';
    import AdornerBox  from './AdornerBox.svelte';
    import car from '$lib/assets/OurServices/car.png';

    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';    

    onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to('.box1', {
            scrollTrigger: 
            {
                trigger: '.box1',
                start: "center bottom",
                end: "top center",
                markers: true,
                toggleActions: "restart pause reverse pause",
                scrub: 0.5
            },
            bottom: 200,
            right: 333,
            opacity: 1
        });
	});

    let { customClass = '' } = $props();
    
</script>

<div class="pageWrapper">
    <div class="pageContent">
        <div class="specialCars {customClass}">
            <p class="fontStyleH6 fontColorC3 smallHeadline">Unsere Spezialkoffer</p>
            <p class="fontStyleH3 fontColorLight largeHeadline">Die Kofferlösung für Rohrreiniggungs- und Inspektionsfahrzeuge</p>

            <div class="grid grid-cols-3 gap-6 carConfigurationGrid">
                <AdornerBox customClass="box1" customStyle="position: absolute; bottom: 100px; right: 300px; opacity: 0"></AdornerBox>
                <AdornerBox customStyle="position: absolute; bottom: 100px; right: 100px;"></AdornerBox>
                <AdornerBox customStyle="position: absolute; bottom: -100px; right: -100px;"></AdornerBox>
                <AdornerBox customStyle="position: absolute; bottom: -100px; right: 100px;"></AdornerBox>
                <CarConfigurationBox title="CubicCube" buzzwords="kurz" description="Modularer Kofferaufbau für einen kurzen Radstand (2 Module)" imgSrc="{car}"></CarConfigurationBox>
                <CarConfigurationBox title="CubicCube" buzzwords="kurz" description="Modularer Kofferaufbau für einen kurzen Radstand (2 Module)" imgSrc="{car}"></CarConfigurationBox>
            </div>
        </div>
    </div>
</div>

<style>
    .pageWrapper{
        position: relative;
    }

    .carConfigurationGrid
    {
        padding-top: 30px;
    }

    .specialCars
    {
        margin: 50px 0;
    }
</style>