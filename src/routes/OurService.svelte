<script lang="ts">
    import '../css/global.css';
    import CarConfigurationBox  from './CarConfigurationBox.svelte';
    import car1 from '$lib/assets/images/OurServices/CC K HD rechts@4x.svg';
    import car2 from '$lib/assets/images/OurServices/CC M FD rechts@4x.svg';
    import car3 from '$lib/assets/images/OurServices/CC M HD rechts@4x.svg';
    import car4 from '$lib/assets/images/OurServices/CC L FD rechts@4x.svg';
    import car5 from '$lib/assets/images/OurServices/CC L HD rechts@4x.svg';

    let { customClass = '' } = $props();
</script>

<div class="pageWrapper">
    <div class="pageContent">
        <p class="fontStyleH6 fontColorC3 smallHeadline">Unsere Koffer-Modelle</p>
        <p class="fontStyleH3 fontColorLight largeHeadline">Modular, effizient, nachhaltig, langlebig</p>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 carConfigurationGrid">
            <!-- <CarConfigurationBox link="/modelle#kurz" title="CubicCube" buzzwords="kurz" description="Modularer Kofferaufbau für einen kurzen Radstand (2 Module)" imgSrc="{car1}"></CarConfigurationBox> -->
            <CarConfigurationBox link="/modelle#mittel" title="CubicCube" buzzwords="mittel, Flachdach" description="Modularer Kofferaufbau für einen mittleren Radstand (3 Module)" imgSrc="{car2}"></CarConfigurationBox>
            <CarConfigurationBox link="/modelle#mittelHochdach" title="CubicCube" buzzwords="mittel, Hochdach" description="Modularer Kofferaufbau als Hochdach für einen mittleren Radstand  (3 Module)" imgSrc="{car3}"></CarConfigurationBox>
            <CarConfigurationBox link="/modelle#lang" title="CubicCube" buzzwords="lang, Flachdach" description="Modularer Kofferaufbau für einen langen Radstand (3 Module)" imgSrc="{car4}"></CarConfigurationBox>
            <CarConfigurationBox link="/modelle#langHochdach" title="CubicCube" buzzwords="lang, Hochdach" description="Modularer Kofferaufbau als Hochdach für einen mittleren Radstand  (3 Module)" imgSrc="{car5}"></CarConfigurationBox>
        </div>
    </div>
</div>


<style>
    .carConfigurationGrid
    {
        padding-top: 50px;
    }
</style>