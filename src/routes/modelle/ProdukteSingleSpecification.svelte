<script lang="ts">
    import '../../css/global.css';

    let { information, anchorID, backgroundColor, backgroundCellColor, title, desc, moduleCount, maxLength, maxWidth, maxHeight, cubeLength, cubeWidth, cubeHeight, weight, material, carImage  } = $props();
</script>

<section id="{anchorID}">
    <div class="pageWrapper"  style="background-color: {backgroundColor}">
        <div class="pageContent">
            <p class="fontStyleH6 fontColorC3 smallHeadline">{title}</p>
            <p class="fontStyleH3 fontColorLight largeHeadline">{desc}</p>       

            <div class="grid grid-cols-1 lg:grid-cols-5" style="border-bottom: 2px solid {backgroundCellColor};">
                <div class="lg:col-span-3 productsCar">
                    <div class="productsCarImage" style="background-image: url({carImage}); background-repeat:no-repeat; background-position: 0% 100%; background-size: contain;"></div>       
                </div>
                <div class="lg:col-span-2 productsCar">
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
                        <div class="specificationTitle fontColorLight" style="background-color: {backgroundCellColor}">Information</div><div class="specificationContent fontColorLight col-span-2" style="background-color: {backgroundCellColor}">{@html information}</div>
                    </div>
                </div>               

            </div>
        </div>
    </div>
</section>



<style>
    .pageWrapper{
        background-color: #587278;
        position: relative;
    }

    .pageContent
    {
        padding: 50px 0;
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

    .largeHeadline
    {
        margin-bottom: 20px;
    }

    @media (width >= 64rem) 
    {
        .productsCarImage
        {
            width: 96%; height: 100%;
        }
    }

    @media (width < 64rem) 
    {
        .productsCarImage
        {
            height: 35vw;
            margin-bottom: 20px;
        }
    }
    


    
</style>