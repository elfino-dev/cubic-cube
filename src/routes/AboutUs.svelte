<script lang="ts">
    import '../css/global.css';
    import Button from './Button.svelte';
    
    let { customClass = '' } = $props();

    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';    

    onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to('.aboutUsCar', {
            scrollTrigger: 
            {
                trigger: '.aboutUsCar',
                start: "center 90%",
                end: "center 50%",
                toggleActions: "restart pause reverse pause",
                scrub: 0.1
            },
            left:100,
            opacity: 1
        });

        gsap.to('.aboutUsCarBorder', {
            scrollTrigger: 
            {
                trigger: '.aboutUsCarBorder',
                start: "center 90%",
                end: "center 50%",
                toggleActions: "restart pause reverse pause",
                scrub: 0.1
            },
            left:100,
            opacity: 1
        });
	});
</script>

<section id="aboutUs">
    <div class="pageWrapper">
        <div class="pageContent">
            <div class="grid grid-cols-1 xl:grid-cols-5">
                <div class="aboutUs xl:col-span-3">
                    <p class="fontStyleH6 fontColorC3 smallHeadline">CubicCube ist einzigartig</p>
                    <p class="fontStyleH3 fontColorLight largeHeadline">Flexible Lösungen durch modulare Bauweise</p>
                
                    <div class="fontColorLight description">
                        <b>Ob für kurze, mittlere oder lange Radstände:</b><br/>
                        Unsere Module sind auf jedes Fahrgestell adaptierbar und bieten vielseitige Einsatzmöglichkeiten.<br/><br/>
                        Durch die <b>modulare</b> Konstruktion wird der vorhandene Raum optimal genutzt, was individuelle Lösungen für verschiedenste Branchen und Einsatzzwecke ermöglicht.
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 buzzwords fontColorLight fontStyleP">  
                        <p>Modularität & Anpassungsfähigkeit</p>
                        <p>Nachhaltigkeit</p>
                        <p>Kurze Lieferzeiten</p>
                        <p>Innovative Technologien</p>
                    </div>
                    <div class="buttonWrapper">
                        <Button link="/modelle">Mehr erfahren</Button>
                    </div>
                    
                </div>
                <div class="carWrapper xl:col-span-2" >
                    <div class="aboutUsCar">
                    </div>
                    <div class="aboutUsCarBorder">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<style>

    .aboutUs
    {
        margin-top:20px;
    }
    .aboutUs b
    {
        font-weight: bold;
        color: var(--colors-primary)
    }

    .aboutUs .description
    {
        margin-top: 30px;
        font-weight: 300;
        font-size: 20px;
    }

    .aboutUs .buzzwords
    {
        margin-top: 20px;
    }

    .aboutUs .buzzwords p
    {
        padding-left: 30px;
        line-height: 20px;
        height: 30px;
    }

    .aboutUs .buzzwords p:before
    {
        content: "";
        display: block;
        background: url("$lib/assets/images/AboutUs/Checkmark.svg") no-repeat;
        width: 20px;
        height: 20px;
        float: left;
        margin: 0 6px 0 0; 
    }
    
    .aboutUs .buttonWrapper
    {
        margin-top:50px;
    }

    .carWrapper
    {
        display: flex;
        position: relative;
    }

    @media (min-width: 1280px) 
    {    
        .aboutUsCarBorder
        {
            height: calc(100% * 0.8);
            aspect-ratio: 1 / 1;     
            
            transform: rotate(45deg);
            margin: auto;

            position: absolute;
            border: 6px solid var(--colors-primary);
            border-radius: 100px;
            left: 300px; 
            opacity: 0;
        }

        .aboutUsCar
        {
            height: calc(100% * 0.8);
            aspect-ratio: 1 / 1;     
            
            transform: rotate(45deg);
            margin: auto;

            position: absolute;
            left: -100px;
            opacity: 0;

            background: url("$lib/assets/images/AboutUs/AboutUsCar.png") no-repeat;
            background-size: 85% 85%;
            background-position: 50% 50%;
            border-radius: 35px; 
            border: none;
        }
    }

    @media (max-width: 1279px) 
    {    
        .carWrapper{
            top:60px;
            height: 579px;
        }

        .aboutUsCar
        {
            height: calc(100% * 0.8);
            aspect-ratio: 1 / 1;     
            
            transform: rotate(45deg);
            margin: auto;

            position: absolute;
            border: 3px solid var(--colors-primary);
            border-radius: 100px;
            left: 300px;
            opacity: 0;

            border-radius: 35px; 
            border: none;
        }

        .aboutUsCarBorder
        {
            height: calc(100% * 0.8);
            aspect-ratio: 1 / 1;     
            
            transform: rotate(45deg);
            margin: auto;

            position: absolute;
            left: -100px;
            opacity: 0;

            background: url("$lib/assets/images/AboutUs/AboutUsCar.png") no-repeat;
            background-size: 85% 85%;
            background-position: 50% 50%;
        }
    }

    
</style>