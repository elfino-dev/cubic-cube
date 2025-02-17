<script lang="ts">
    import '../../css/global.css';

    let { anchorID, backgroundColor, backgroundCellColor, title, desc, moduleCount, maxLength, maxWidth, maxHeight, cubeLength, cubeWidth, cubeHeight, weight, material, carImage  } = $props();
</script>

<section id="{anchorID}">
    <div class="pageWrapper"  style="background-color: {backgroundColor}">
        <div class="pageContent">
            <p class="fontStyleH6 fontColorC3 smallHeadline">{title}</p>
            <p class="fontStyleH3 fontColorLight largeHeadline">{desc}</p>       

            <div class="grid grid-cols-1 xl:grid-cols-5" style="border-bottom: 2px solid {backgroundCellColor};">
                <div class="xl:col-span-3 productsCar">
                    <div style="background-image: url({carImage}); background-repeat:no-repeat; background-position: 0% 100%; width: 96%; height: 96%; background-size: contain; margin-top: 2%;"></div>       
                </div>
                <div class="xl:col-span-2 productsCar">
                    <div class="grid grid-cols-3 gap-[6px]">
                        <div class="specificationTitle fontColorLight" style="background-color: {backgroundCellColor}">Module</div><div class="specificationContent fontColorLight col-span-2" style="background-color: {backgroundCellColor}">{moduleCount}</div>
                        <div class="specificationTitle fontColorLight" style="background-color: {backgroundCellColor}">max. Länge</div><div class="specificationContent  fontColorLight col-span-2" style="background-color: {backgroundCellColor}">{maxLength}</div>
                        <div class="specificationTitle fontColorLight" style="background-color: {backgroundCellColor}">max. Breite</div><div class="specificationContent fontColorLight col-span-2" style="background-color: {backgroundCellColor}">{maxWidth}</div>
                        <div class="specificationTitle fontColorLight" style="background-color: {backgroundCellColor}">max. Höhe</div><div class="specificationContent fontColorLight col-span-2" style="background-color: {backgroundCellColor}">{maxHeight}</div>
                        <div class="specificationTitle fontColorLight" style="background-color: {backgroundCellColor}">Koffer Länge</div><div class="specificationContent fontColorLight col-span-2" style="background-color: {backgroundCellColor}">{cubeLength}</div>
                        <div class="specificationTitle fontColorLight" style="background-color: {backgroundCellColor}">Koffer Breite</div><div class="specificationContent fontColorLight col-span-2" style="background-color: {backgroundCellColor}">{cubeWidth}</div>
                        <div class="specificationTitle fontColorLight" style="background-color: {backgroundCellColor}">Koffer Höhe</div><div class="specificationContent fontColorLight col-span-2" style="background-color: {backgroundCellColor}">{cubeHeight}</div>
                        <div class="specificationTitle fontColorLight" style="background-color: {backgroundCellColor}">Gewicht</div><div class="specificationContent fontColorLight col-span-2" style="background-color: {backgroundCellColor}">{weight}</div>
                        <div class="specificationTitle fontColorLight" style="background-color: {backgroundCellColor}">Material</div><div class="specificationContent fontColorLight col-span-2" style="background-color: {backgroundCellColor}">{material}</div>
                        <div class="specificationTitle fontColorLight" style="background-color: {backgroundCellColor}">Information</div><div class="specificationContent fontColorLight col-span-2" style="background-color: {backgroundCellColor}"><slot name="information"></slot></div>
                    </div>
                </div>               

            </div>
        </div>
    </div>
</section>



<style>
    .singleCarWrapper
    {
        
    }

    .pageWrapper{
        background-color: #587278;
        position: relative;
    }

    .pageContent
    {
        padding: 50px 0;
    }

    .grid
    {
        margin-top: 50px;
    }

    .specificationTitle
    {
        font-weight: bold;
        text-align:center;
        padding:10px;
    }

    .specificationContent
    {
        text-align: center;
        padding:10px;
    }

    
</style>