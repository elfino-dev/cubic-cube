<script lang="ts">
    import '../css/global.css';
    import logoExpanded from '$lib/assets/images/cubicCubeLogo.png';
    import logoCollapsed from '$lib/assets/images/LOGO_CubicCube_2024_RZ_web_horizontal.png';

    import Button from './Button.svelte';

    let { customClass = '' } = $props();

    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';    

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#menuBar", {
            opacity: "1", // Solid color at 800px
            left: '-1%',
            width: '102%',
            backgroundColor: "#203238",
            borderBottom: "3px solid #A6D760",
            borderRightWidth: 0,
            borderLeftWidth: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            scrollTrigger: {
                trigger: "body",
                start: "top+=100 top", // Starts animating early (adjustable)
                end: "top+=300 top", // Fully solid at 800px
                scrub: 1, // Smooth transition
            },
        });   
        
        gsap.to("#menuBar .headerGrid", {
            opacity: "1", // Solid color at 800px
            scrollTrigger: {
                trigger: "body",
                start: "top+=300 top", // Starts animating early (adjustable)
                end: "top+=500 top", // Fully solid at 800px
                scrub: 1, // Smooth transition
            },
        });  
        
        gsap.to("#cubicCubeLogo", {
            opacity: "0", // Solid color at 800px
            left: 0,
            scrollTrigger: {
                trigger: "body",
                start: "top+=100 top", // Starts animating early (adjustable)
                end: "top+=300 top", // Fully solid at 800px
                scrub: 1, // Smooth transition
            },
        });   
    });
    
</script>
<div class="pageWrapper" id="menuBar">
    <div class="pageContent">
        <div class="grid grid-cols-6 headerGrid {customClass}">
            <div class="align-middle">
                <a href="/"><img alt="Cubic Cube" src={logoExpanded} /></a>
            </div>
            <div></div>
            <a class="align-middle pageButton" href="/ueberUns">Über uns</a>
            <a class="align-middle pageButton" href="/modelle">Modelle</a>
            <a class="align-middle pageButton" href="/kontakt">Kontakt</a>
            <div class="align-middle">
                <Button link="/kontakt#kontaktFrame" customStyle="font-weight: bold;" onClick={() => {}}>Jetzt beraten lassen</Button>  
            </div>
        </div>
    </div>
</div>

<div class="pageWrapper" id="logoBar">
    <div class="pageContent">
        <a href="/" id="cubicCubeLogo"><img alt="Cubic Cube" src={logoCollapsed} /></a> 
    </div>
</div>
<style>
    
    .logoWhenExpanded
    {
        opacity: 0;
    }

    #logoBar
    {
        pointer-events: none;
    }    

    #logoBar .pageContent
    {
        pointer-events: none;
    }

    #cubicCubeLogo
    {
        position: absolute;
        left: calc(50% - 220px / 2);
        top: 0;

        pointer-events: all;
    }

    #logoBar img
    {
        margin-top: 15px;
        width: 220px;
    }

    @media (width < 60rem) { 
        .pageWrapper
        {
            display: none;
        }   
    }

    .pageWrapper
    {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        height: 100px;
        z-index: 9000;
    }

    #menuBar.pageWrapper
    {
        background-color: white;
        position: fixed;
        top: 0;
        left: calc(50% - 150px); 
        width: 300px;
        /* border-right: 3px solid #A6D760;
        border-left: 3px solid #A6D760;
        border-bottom: 3px solid #A6D760; */
        border-bottom-left-radius: 35px;
        border-bottom-right-radius: 35px;
        transition: all 0.5;
    }

    .pageContent
    {
        position: relative;
        padding: 0;
    }

    .headerGrid
    {
        height: 91px; 
        color: var(--colors-light);
        opacity: 0;
    }

    .headerGrid > a,
    .headerGrid > div
    {
        margin: auto;
    }

    .pageButton{
        font-family: "Sans Serif Pro", sans-serif;
        font-weight: 300;
        font-style: normal;
        font-size: 20px;
        padding: 5px 10px;
        border-radius: 10px;
        position: relative;
        cursor: pointer;
    }

    .pageButton:before,
    .pageButton:after
    {
        content: '';
        display: block;
        position: absolute;
        width: 0%;
        border-top: 3px solid var(--colors-primary);
        transition: all 0.2s ease-in-out;
    }

    .pageButton:before
    {
        left: 0%;
        top: 0;
    }

    .pageButton:after
    {
        left: 100%;
        bottom: 0;
    }
    
    .pageButton:hover:before,
    .pageButton:hover:after
    {
        width: 100%;
    }

    .pageButton:hover:after
    {
        left: 0%;
    }
</style>