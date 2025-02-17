<script lang="ts">
    import '../css/global.css';
    import AdornerBox from './AdornerBox.svelte';
    
    let { customClass = '' } = $props();

    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';    

    onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to('.box1Testemonials', {
            scrollTrigger: 
            {
                trigger: '.box1Testemonials',
                start: "top 70%",
                end: "bottom 50%",
                toggleActions: "restart pause reverse pause",
                scrub: 0.1
            },
            bottom: 350,
            right: 500,
            opacity: 1,
            rotate : -45,
        });

        gsap.to('.box2Testemonials', {
            scrollTrigger: 
            {
                trigger: '.box2Testemonials',
                start: "top 100%",
                end: "bottom 70%",
                toggleActions: "restart pause reverse pause",
                scrub: 0.1
            },
            bottom: -150,
            right: 100,
            width: 500,
            height: 500,
            opacity: 1,
            rotate : -45, 
        });
	});
</script>

<div class="pageWrapper backgroundColor5"> 
    <div class="pageContent">
        <div class="specialCars">
            <p class="fontStyleH6 fontColorC3 smallHeadline">Kundenstimmen</p>
            <p class="fontStyleH3 fontColorLight largeHeadline">Innovation, Begeisterung &<br/> Anerkennung</p>

            <AdornerBox customClass="box1Testemonials" customStyle="position: absolute; bottom: 150px; right: 100px;transform: rotate(45deg); background-color: var(--colors-color2); border-width: 0; opacity: 0"></AdornerBox>
            <AdornerBox customClass="box2Testemonials" customStyle="width: 200px; height: 200px; position: absolute; bottom: -150px; right: 300px;transform: rotate-45deg); border-color: var(--colors-color3); opacity: 0"></AdornerBox>

            <div class="frameWrapper">
                <div class="grid grid-cols-2 testemonialGrid">
                    <div class="testemonialItem fontColorLight">
                        <div>
                            <div>
                                <div class="testemonialHeadline fontStyleH4">IFAT 2024 München</div>
                                <div class="testemonialBody fontStyleP">Unser modularer Aufbau stieß auf der IFAT auf großes Interesse und sorgte für viel positive Resonanz. Die Fachbesucher waren besonders von der Flexibilität und den vielseitigen Einsatzmöglichkeiten unserer Lösung beeindruckt.</div>
                                <div class="testemonialIcon"></div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .pageWrapper{
        position: relative;
    }

    .frameWrapper
    {
        background-color: var(--colors-color5);
    }

    .testemonialGrid
    {
        padding-top: 50px;
    }

    .testemonialItem
    {
        background: url("$lib/assets/images/Testemonials/IFAT2024.jpg") no-repeat;
        background-size: 700px 700px;
        border-radius: 8px;
        position: relative;
        aspect-ratio: 1 / 1;
        vertical-align: bottom;
        transition: all 0.2s ease-in-out;
        border-radius: 35px;
        overflow: hidden;
    }

    .testemonialItem > div
    {
        position: absolute;
        bottom: 40px;
        left: 40px;
        right: 40px;
        background-color: var(--colors-color2);
    }

    .testemonialItem > div > div
    {
        position: relative;
        padding: 20px;
    }

    .testemonialBody
    {
        padding-top:20px;
    }

    .testemonialIcon
    {
        background: url("$lib/assets/images/Testemonials/IFATIcon.png") no-repeat;
        border-radius: 8px;
        position: absolute;
        top: calc(-1 * 126px / 2);
        height: 126px;
        width: 120px;
        right: 50px;
    }

    
</style>