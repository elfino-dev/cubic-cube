<script lang="ts">
    import '../css/global.css';
    import Image from '$lib/assets/images/WhyChooseUs/Image (2).png';
    
    let { customClass = '' } = $props();
</script>

<div class="pageWrapper"> 
    <div class="pageContent">
        <div class="grid grid-cols-3 gap-6 carConfigurationGrid">
            <div>
                <p class="fontStyleH6 fontColorC3 smallHeadline">Das ist CubicCube</p>
                <p class="fontStyleH3 fontColorLight largeHeadline">Warum Sie sich für CubicCube entscheiden sollen</p>
            </div>
            <div></div>
            <div></div>
            <div class="fontStyleP fontColorLight">
                CubicCube ist die Antwort auf Ihre Suche nach einer innovativen Nutzfahrzeug-Kofferlösung. Denn CubicCube kann mehr als herkömmliche Kofferaufbauten mit fester Struktur. 
<br/>
<br/>
Die Marke bedeutet übersetzt ”Kubikwürfel“ und symbolisiert die Vereinigung von “Kubik“ als Raummaß, das für die Geräumigkeit der CubicCubes steht, und “Würfel“ als Sinnbild für die modulare Struktur und Anpassungsfähigkeit unserer Koffer.
            </div>
            <div class="col-span-2">
                <img src={Image}>
            </div>
        </div>
    </div>
</div>

<style>
    .pageWrapper
    {
        position: relative; /* to block previous square*/
    }
    
</style>