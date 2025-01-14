<script lang="ts">
    import '../../css/global.css';

    let { anchorID, backgroundColor, title, desc, moduleCount, maxLength, maxWidth, maxHeight, cubeLength, cubeWidth, cubeHeight, weight, material, carImage  } = $props();
</script>

<section id="{anchorID}">
    <div class="pageWrapper"  style="background-color: {backgroundColor}">
        <div class="pageContent">
            <p class="fontStyleH6 fontColorC3 smallHeadline">{title}</p>
            <p class="fontStyleH3 fontColorLight largeHeadline">{desc}</p>       

            <div class="grid grid-cols-1 xl:grid-cols-5">
                <div class="xl:col-span-3 productsCar row-span-10">
                    <div style="background-image: url({carImage}); background-repeat:no-repeat; background-position: 0% 50%; width: 96%; height: 96%; background-size: contain; margin-top: 2%;"></div>       
                </div>
                <div class="specificationTitle fontColorLight">Module</div><div class="specificationContent  fontColorLight">{moduleCount}</div>
                <div class="specificationTitle fontColorLight">max. Länge</div><div class="specificationContent  fontColorLight">{maxLength}</div>
                <div class="specificationTitle fontColorLight">max. Breite</div><div class="specificationContent fontColorLight">{maxWidth}</div>
                <div class="specificationTitle fontColorLight">max. Höhe</div><div class="specificationContent fontColorLight">{maxHeight}</div>
                <div class="specificationTitle fontColorLight">Koffer Länge</div><div class="specificationContent fontColorLight">{cubeLength}</div>
                <div class="specificationTitle fontColorLight">Koffer Breite</div><div class="specificationContent fontColorLight">{cubeWidth}</div>
                <div class="specificationTitle fontColorLight">Koffer Höhe</div><div class="specificationContent fontColorLight">{cubeHeight}</div>
                <div class="specificationTitle fontColorLight">Gewicht</div><div class="specificationContent fontColorLight">{weight}</div>
                <div class="specificationTitle fontColorLight">Material</div><div class="specificationContent fontColorLight">{material}</div>
                <div class="specificationTitle fontColorLight">Information</div><div class="specificationContent fontColorLight"><slot name="information"></slot></div>

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
        background-color: #33ACCC;
        text-align:center;
        padding:15px;
    }

    .specificationContent:not(:last-child)
    {
        border-bottom: 2px solid #587278;
    }

    .specificationContent
    {
        text-align: center;
        padding:15px;
        background-color:#203238;
    }

    
</style>