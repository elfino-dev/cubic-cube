<script lang="ts">
    import '../css/global.css';
    import CarConfigurationBox  from './CarConfigurationBox.svelte';
    import car from '$lib/assets/OurServices/car.png';

    let { customClass = '' } = $props();
</script>

<div class="pageWrapper">
    <div class="pageContent">
        <p class="fontStyleH6 fontColorC3 smallHeadline">Unsere Koffer-Modelle</p>
        <p class="fontStyleH3 fontColorLight largeHeadline">Modular, effizient, nachhaltig, langlebig.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 carConfigurationGrid">
            <CarConfigurationBox link="/produkte#kurz" title="CubicCube" buzzwords="kurz" description="Modularer Kofferaufbau für einen kurzen Radstand (2 Module)" imgSrc="{car}"></CarConfigurationBox>
            <CarConfigurationBox link="/produkte#mittelInspektion" title="CubicCube" buzzwords="mittel (Inspektion)" description="Modularer Kofferaufbau für einen mittleren Radstand (2 Module) - Inspektionsfahrzeug" imgSrc="{car}"></CarConfigurationBox>
            <CarConfigurationBox link="/produkte#mittel" title="CubicCube" buzzwords="mittel" description="Modularer Kofferaufbau für einen mittleren Radstand (2 Module)" imgSrc="{car}"></CarConfigurationBox>
            <CarConfigurationBox link="/produkte#langInspektion" title="CubicCube" buzzwords="lang (Inspektion)" description="Modularer Kofferaufbau für einen langen Radstand (2 Module) - Inspektionsfahrzeug" imgSrc="{car}"></CarConfigurationBox>
            <CarConfigurationBox link="/produkte#lang" title="CubicCube" buzzwords="lang" description="Modularer Kofferaufbau für einen langen Radstand (2 Module)" imgSrc="{car}"></CarConfigurationBox>
        </div>
    </div>
</div>


<style>
    .carConfigurationGrid
    {
        padding-top: 30px;
    }
</style>