<script lang="ts">
    import '../css/global.css';
    import Button from './Button.svelte';
    import Arrow from '$lib/assets/images/Common/Arrow.svelte';
    
    let { customClass = '' } = $props();
</script>

<div class="pageWrapper">
    <div class="pageContent">
        <div class="grid grid-cols-2">
            <div class="aboutUs">
                <p class="fontStyleH6 fontColorC3 smallHeadline">CubicCube ist einzigartig</p>
                <p class="fontStyleH3 fontColorLight largeHeadline">Flexible Lösungen durch modulare Bauweise</p>
            
                <div class="fontColorLight description">
                    <b>Ob für kurze, mittlere oder lange Radstände:</b><br/>
                    Unsere Module sind auf jedes Fahrgestell adaptierbar und bieten vielseitige Einsatzmöglichkeiten.<br/><br/>
                    Durch die <b>modulare</b> Konstruktion wird der vorhandene Raum optimal genutzt, was individuelle Lösungen für verschiedenste Branchen und Einsatzzwecke ermöglicht.
                </div>

                <div class="grid grid-cols-2 buzzwords fontColorLight fontStyleP">  
                    <p>Modularität & Anpassungsfähigkeit</p>
                    <p>Nachhaltigkeit</p>
                    <p>Kurze Lieferzeiten</p>
                    <p>Innovative Technologien</p>
                </div>
                <div class="buttonWrapper">
                    <Button>Mehr erfahren <Arrow></Arrow></Button>
                </div>
                
            </div>
            <div class="carWrapper">
                <div class="car">
                </div>
            </div>
        </div>
    </div>
</div>


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
    }

    .aboutUs .buzzwords
    {
        margin-top: 20px;
    }

    .aboutUs .buzzwords p
    {
        padding-left: 30px;
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

    @keyframes fade-in{
        0%
        {
            scale: 0.8; opacity: 0;
        }
        30%{
            scale: 1; opacity: 0.1;
        }
    }

    .carWrapper
    {
        display: flex;
        animation: fade-in linear;
        animation-timeline: view(0% 0%, 100% 100%);  
    }
    
    .car
    {
        height: calc(100% * 0.8);
        aspect-ratio: 1 / 1;

        background: url("$lib/assets/images/AboutUs/AboutUsCar.png") no-repeat;
        background-size: 85% 85%;
        background-position: 50% 50%;

        border: 7px solid var(--colors-primary);
        border-radius: 100px;
        transform: rotate(45deg);
        margin: auto;
    }

    
</style>