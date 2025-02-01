<script lang="ts">
    import '../css/global.css';
    import logo from '$lib/assets/images/cubicCubeLogo.png';
    import Button from './Button.svelte';

    let { customClass = '' } = $props();

    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';    

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".pageWrapper", {
            opacity: "1", // Solid color at 800px
            scrollTrigger: {
                trigger: "body",
                start: "top+=100 top", // Starts animating early (adjustable)
                end: "top+=300 top", // Fully solid at 800px
                scrub: 1, // Smooth transition
            },
        });        
    });
    
</script>
<div class="pageWrapper">
    <div class="pageContent">
        <div class="grid grid-cols-7 headerGrid {customClass}">
            <div class="align-middle">
                <img alt="Cubic Cube" src={logo} />
            </div>
            <div></div>
            <a class="align-middle pageButton" href="/">Home</a>
            <a class="align-middle pageButton" href="#aboutUs">Über uns</a>
            <a class="align-middle pageButton" href="/produkte">Produkte</a>
            <a class="align-middle pageButton" href="/kontakt">Kontakt</a>
            <div class="align-middle">
                <Button link="/kontakt">Jetzt beraten lassen</Button>
            </div>
        </div>
    </div>
</div>

<style>
    .pageWrapper
    {
        background-color: #203238;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        border-bottom: 1px solid #A6D760;
        opacity: 0;
        transition: all 0.5;
        z-index: 9000;
    }

    .pageContent
    {
        padding: 0;
    }

    .headerGrid
    {
        height: 91px; 
        color: var(--colors-light);
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