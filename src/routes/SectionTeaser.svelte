<script lang="ts">
    import '../css/global.css';

    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';    

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#scrollIndicator", {
            opacity: "0", // Solid color at 800px
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
    <div id="square1"></div>
    <div id="square2"></div>
    <div class="pageContent">
        <div class="flex items-center justify-center"> 
            <div class="teaserContentWrapper"> 
                <h4 class="fontStyleH6 fontColorPrimary">CubicCube: <br/>Die innovative Nutzfahrzeug-Kompaktlösung</h4>
                <h1 class="fontStyleH1 fontColorLight">Flexible Lösungen durch modulare Bauweise</h1>
            </div> 
        </div>

        <div id="scrollIndicator"></div>
    </div>
</div>


<style>
    .teaserContentWrapper .fontStyleH6
    {
        margin-bottom: 20px;
    }

    #scrollIndicator
    {
        position: absolute;
        left: calc(50% - 20px);
        bottom: 35px;
        height: 50px;
        width: 30px;
        border-radius: 15px;
        border: 1px solid white;
    }

    #scrollIndicator::after
    {
        animation-name: scrollAnimation;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        width: 1px;
        position: absolute; 
        left: calc(50% - 1px);
        content: '';
        background-color: white;
    }

    #scrollIndicator::before{
        content: 'scroll down';
        position: absolute; 
        bottom: -30px;
        left: calc(-100px + 15px);
        width: 200px;
        text-align: center;
        color: white;
        font-weight: 200;
    }

    @keyframes scrollAnimation 
    {
        0% {
            height: 0;
            top: 2px
        }
        40% {
            top: 10px;
            height: 10px;
        }
        80%{ 
            top: 22px;
            height: 0;
        }
    }

    @media (width < 60rem) 
    {
        #square1
        {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            background-color: #415D63CC;
        }

        #square2
        {
            display: none;            
        }
    }

    @media (width >= 60rem) 
    {
        #square1
        {
            position: absolute;
            right: 80vw;
            top: calc((100vh - 3000px) / 2);
            width: 3000px;
            height: 3000px;
            border-radius: 120px;
            transform: rotate(45deg);
            background-color: #415D63CC;
        }

        #square2
        {
            position: absolute;
            right: calc(80vw - 25px);
            top: calc((100vh - 3050px) / 2);
            width: 3050px;
            height: 3050px;
            border-radius: 144px;
            transform: rotate(45deg);
            border: 10px solid var(--colors-primary);
        }
    }

    

    .pageWrapper{
        position: relative;
        background: url("$lib/assets/images/TeaserImage.jpg") no-repeat;
        background-position: center top;
        background-size: auto 100%;
        height: 100vh;
    }

    .teaserContentWrapper
    {
        position: absolute;
        left: 10vw;
        top: 50vh;
        transform: translateY(-50%);
        margin: 0;
        width: 45vh;
    }

    .teaserContentWrapper > *
    {
        vertical-align: middle;
    }

    .pageContent
    {
        margin-top:0;
        padding-top:0;
    }
</style>