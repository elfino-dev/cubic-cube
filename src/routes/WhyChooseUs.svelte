<script lang="ts">
    import '../css/global.css';
    import Image from '$lib/assets/images/WhyChooseUs/CC_Seitlich.jpg';
    
    let { customClass = '' } = $props();
</script>

<div class="pageWrapper"> 
    <div class="pageContent">
        <div class="grid grid-cols-1 xl:grid-cols-5 xl:gap-[70px] carConfigurationGrid">
            
            <div class="xl:col-span-3" style="border-radius: 35px; overflow: auto;">
                <img src={Image}>
            </div>
            <div class="xl:col-span-2">
                <p class="fontStyleH6 fontColorC3 smallHeadline">Das ist CubicCube</p>
                <p class="fontStyleH3 fontColorLight largeHeadline">Warum Sie sich<br/>für CubicCube <br/>entscheiden sollen</p>               
                <div class="fontStyleP fontColorLight description">
                    CubicCube ist die Antwort auf Ihre Suche nach einer innovativen Nutzfahrzeug-Kofferlösung. Im Gegensatz zu herkömmlichen Kofferaufbauten mit fester Struktur bietet CubicCube mehr Flexibiliät und Anpassungsmöglichkeiten.
                    <br/>
                    <br/>
                    Die Marke "CubicCube" bedeutet wortwörtlich ”Kubikwürfel“ und vereint zwei Zentrale Eigenschaften: “Kubik“ als Raummaß steht für das großzügige Raumangebot. “Würfel“ als Sinnbild für die modulare Struktur und Anpassungsfähigkeit unserer Koffer.
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