<script lang="ts">
    import '../../css/global.css';

    import productsCar from '$lib/assets/images/Produkte/ProdukteCar.png';
    import Arrow from '$lib/assets/images/Common/Arrow.svelte';
</script>

<div class="pageWrapper">
    <div class="pageContent">
        <p class="fontStyleH6 fontColorC3 smallHeadline">7 Modelle zur Auswahl</p>
        <p class="fontStyleH3 fontColorLight largeHeadline">CubicCube Koffer sind in 5 Varianten erhältlich</p>       

        <div class="carDetailWrapper">
            <div class="singleCar grid grid-cols-1 xl:grid-cols-5 gap-[20px]">
                <div class="fontColorLight description">
                    Koffer mit hohem oder flachem Dach, sowie Koffer für Fahrzeuge mit kurzem, mittleren oder langem Radstand.
                </div>
                <div class="xl:col-span-3 productsCar">
                    <div style="background-image: url({productsCar}); background-repeat:no-repeat; background-position: 0% 50%;"></div>       
                    <p class="fontStyleH5 fontColorSecondary carDescription">Mittlerer Radstand 3,665m (3 Module)</p>
                </div>
                <div></div>
            </div>
        </div>


        <div class="carSelectionWrapper">
            <div class="carSelectionSwitcher carSelectionSwitcherLeft">
                <Arrow></Arrow>
            </div>
            <div class="carSelectionSwitcher carSelectionSwitcherRight">
                <Arrow></Arrow>
            </div>
            <div class="carSelectionSwitcherHighlightFrame"> 
                
            </div>
        </div>
    </div>
</div>


<style>
    .carDetailWrapper
    {
        position: relative;
        height: 449px;
    }

    .carDetailWrapper .singleCar
    {
        width: 100%;
        position: absolute;
    }

    .productsCar > div
    {
        height: 350px;
        background-size: contain;
    }

    .largeHeadline
    {
        margin-top: 30px;
        margin-bottom: 50px;
    }

    .carDescription
    {
        margin-top: 20px;
        margin-bottom: 50px;
        text-align: center;        
    }

    .carSelectionWrapper
    {
        position: relative;
        background-color: #D9D9D91A;
        border-radius: 35px;
        height: 323px;
        width: 100%;
    }

    .carSelectionWrapper .carSelectionSwitcher
    {
        cursor: pointer;
        transition: all 0.1s ease-in-out;
        background-color: var(--colors-primary);
        position: absolute;
        width: 42px;
        height: 42px;
        top: calc(50% - 42px/2);
        display: grid;
        place-items: center;
    }

    .carSelectionWrapper .carSelectionSwitcher.carSelectionSwitcherLeft
    {
        left: 20px;
        transform: rotate(180deg);
    }

    .carSelectionWrapper .carSelectionSwitcher.carSelectionSwitcherRight
    {
        right: 20px;
    }

    .carSelectionWrapper .carSelectionSwitcher.carSelectionSwitcherLeft:hover
    {
        transform: rotate(180deg) scale(1.2);
    }

    .carSelectionWrapper .carSelectionSwitcher.carSelectionSwitcherRight:hover
    {
        transform: scale(1.2);
    }

    .carSelectionSwitcherHighlightFrame
    {
        position: absolute;
        top: -10%;
        height: 120%;
        width: 38%;
        left:0;
        right: 0;
        margin: auto;
        background-color: var(--colors-color5);
        border-radius: 35px;
    }

</style>