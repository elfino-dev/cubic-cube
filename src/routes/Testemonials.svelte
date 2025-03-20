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
                <p class="fontStyleH3 fontColorLight largeHeadline">Innovation, Begeisterung & Anerkennung</p>

                <AdornerBox customClass="box1Testemonials" customStyle="position: absolute; bottom: 150px; right: 100px;transform: rotate(45deg); background-color: var(--colors-color2); border-width: 0; opacity: 0"></AdornerBox>
                <AdornerBox customClass="box2Testemonials" customStyle="width: 200px; height: 200px; position: absolute; bottom: -150px; right: 300px;transform: rotate-45deg); border-color: var(--colors-color3); opacity: 0"></AdornerBox>

                <div class="frameWrapper">
                    <div class="grid grid-cols-1 lg:grid-cols-2 testemonialGrid gap-[20px]">

                        <div class="testemonialItem highlight testemonialROKATECH fontColorC2">
                            <div class="testemonialImage">
                                <div class="testemonialIcon"></div>
                            </div>
                            <div class="testemonialContent">
                                <div>
                                    <div class="fontStyleH7">Wir sind dabei!</div>
                                    <div class="fontStyleH4">RO-KA-TECH</div>
                                    <div class="testemonialBody fontStyleH5">Besuchen Sie uns auf der RO-KA-TECH. Die internationale Fachmesse für Rohr- und Kanaltechnik am 
                                        <br/><span class="fontStyleH5" style="font-weight:bold;">13. Mai bis 16. Mai 2025 | Messe Kassel<br/>Freigelände Halle 2 | Stand: F2-6</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>    

                        <div class="testemonialItem testemonialIFAT fontColorLight">
                            <div class="testemonialImage">
                                <div class="testemonialIcon"></div>
                            </div>
                            <div class="testemonialContent">
                                <div>
                                    <div class="fontStyleH7 fontColorC3">Rückblick</div>
                                    <div class="testemonialHeadline fontStyleH4">IFAT 2024 München</div>
                                    <div class="testemonialBody fontStyleH5">Unser modularer Aufbau stieß auf der IFAT auf großes Interesse und sorgte für viel positive Resonanz. Die Fachbesucher waren besonders von der Flexibilität und den vielseitigen Einsatzmöglichkeiten unserer Lösung beeindruckt.</div>
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
            border-radius: 8px;
            position: relative;
            aspect-ratio: 1 / 1;
            display: flex;
            flex-direction: column;
            vertical-align: bottom;
            transition: all 0.2s ease-in-out;
        }

        .testemonialImage{
            background-size: cover;
            background-repeat: no-repeat;
            background-size: 102%;
            border-radius: 35px 35px 0 0;
            position: relative;
        }

        .testemonialItem.testemonialIFAT .testemonialImage
        {
            background-image: url("$lib/assets/images/Testemonials/IFAT2024.jpg");
        }

        .testemonialItem.testemonialROKATECH .testemonialImage
        {
            background-image: url("$lib/assets/images/Testemonials/ROKATECH.jpg");
        }

        .testemonialItem .testemonialImage
        {
            height: 50%;
        }

        .testemonialItem .testemonialContent
        {
            min-height: 50%;
            flex-grow: 1;
            overflow: auto;
            background-color: var(--colors-color2);
            border-radius: 0 0 35px 35px;
        }

        .testemonialItem.highlight .testemonialContent
        {
            background-color: var(--colors-color3);
        }

        .testemonialItem > .testemonialContent > div
        {
            position: relative;
            padding: 7%;
        }

        .testemonialBody
        {
            padding-top:20px;
        }

        .testemonialIcon
        {
            border-radius: 8px;
            position: absolute;
            bottom: calc(-1 * 126px / 2);
            height: 126px;
            width: 120px;
            right: 50px;
        }

        .testemonialItem.testemonialIFAT .testemonialIcon
        {
            background-image: url("$lib/assets/images/Testemonials/IFATIcon.png");
        }

        .testemonialItem.testemonialROKATECH .testemonialIcon
        {
            background-image: url("$lib/assets/images/Testemonials/ROKATECHIcon.png");
        }
        

    </style>