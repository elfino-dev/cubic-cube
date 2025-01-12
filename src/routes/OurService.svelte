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
            <CarConfigurationBox title="CubicCube" buzzwords="kurz" description="Modularer Kofferaufbau für einen kurzen Radstand (2 Module)" imgSrc="{car}"></CarConfigurationBox>
            <CarConfigurationBox title="CubicCube" buzzwords="kurz" description="Modularer Kofferaufbau für einen kurzen Radstand (2 Module)" imgSrc="{car}"></CarConfigurationBox>
            <CarConfigurationBox title="CubicCube" buzzwords="kurz" description="Modularer Kofferaufbau für einen kurzen Radstand (2 Module)" imgSrc="{car}"></CarConfigurationBox>
            <CarConfigurationBox title="CubicCube" buzzwords="kurz" description="Modularer Kofferaufbau für einen kurzen Radstand (2 Module)" imgSrc="{car}"></CarConfigurationBox>
            <CarConfigurationBox title="CubicCube" buzzwords="kurz" description="Modularer Kofferaufbau für einen kurzen Radstand (2 Module)" imgSrc="{car}"></CarConfigurationBox>
        </div>
    </div>
</div>


<style>
    .carConfigurationGrid
    {
        padding-top: 30px;
    }
</style>