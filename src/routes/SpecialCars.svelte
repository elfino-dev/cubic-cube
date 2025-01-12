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
        <div class="specialCars {customClass}">
            <p class="fontStyleH6 fontColorC3 smallHeadline">Unsere Spezialkoffer</p>
            <p class="fontStyleH3 fontColorLight largeHeadline">Die Kofferlösung für Rohrreiniggungs- und Inspektionsfahrzeuge</p>

            <div class="grid grid-cols-3 gap-6 carConfigurationGrid">
                <AdornerBox customClass="box1" customStyle="position: absolute; bottom: 300px; right: 500px; opacity: 0"></AdornerBox>
                <AdornerBox customClass="box2" customStyle="position: absolute; bottom: 300px; right: -100px; opacity: 0"></AdornerBox>
                <AdornerBox customClass="box3" customStyle="position: absolute; bottom: -100px; right: 700px; opacity: 0"></AdornerBox>
                <AdornerBox customClass="box4" customStyle="position: absolute; bottom: -150px; right: -150px; opacity: 0"></AdornerBox>
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