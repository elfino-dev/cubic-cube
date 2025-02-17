<script lang="ts">
    import '../css/global.css';
    import Image from '$lib/assets/images/WhyChooseUs/CC_Seitlich.jpg';
    
    let { customClass = '' } = $props();
</script>

<div class="pageWrapper"> 
    <div class="pageContent">
        <div class="grid grid-cols-5 gap-[70px] carConfigurationGrid">
            
            <div class="col-span-3" style="border-radius: 35px; overflow: auto;">
                <img src={Image}>
            </div>
            <div class="col-span-2">
                <p class="fontStyleH6 fontColorC3 smallHeadline">Das ist CubicCube</p>
                <p class="fontStyleH3 fontColorLight largeHeadline">Warum Sie sich<br/>für CubicCube <br/>entscheiden sollen</p>               
                <div class="fontStyleP fontColorLight description">
                    CubicCube ist die Antwort auf Ihre Suche nach einer innovativen Nutzfahrzeug-Kofferlösung. Denn CubicCube kann mehr als herkömmliche Kofferaufbauten mit fester Struktur. 
                    <br/>
                    <br/>
                    Die Marke bedeutet übersetzt ”Kubikwürfel“ und symbolisiert die Vereinigung von “Kubik“ als Raummaß, das für die Geräumigkeit der CubicCubes steht, und “Würfel“ als Sinnbild für die modulare Struktur und Anpassungsfähigkeit unserer Koffer.
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .pageWrapper
    {
        position: relative; /* to block previous square*/
    }

    .description
    {
        margin-top: 30px;
    }
    
</style>