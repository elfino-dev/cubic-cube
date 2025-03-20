<script lang="ts">
    import '../css/global.css';
    import Image from '$lib/assets/images/WhyChooseUs/CC_Seitlich.jpg';
    
    let { customClass = '' } = $props();
</script>

<div class="pageWrapper"> 
    <div class="pageContent">
        <div class="grid grid-cols-1 md:grid-cols-5 md:gap-[70px] carConfigurationGrid">
            
            <div class="md:col-span-3" style="border-radius: 35px; overflow: auto;">
                <img src={Image}>
            </div>
            <div class="md:col-span-2">
                <p class="fontStyleH6 fontColorC3 smallHeadline">Das ist CubicCube</p>
                <p class="fontStyleH3 fontColorLight largeHeadline">Warum Sie sich für CubicCube entscheiden sollen</p>               
                <div class="fontStyleP fontColorLight description">
                    CubicCube ist die Antwort auf Ihre Suche nach einer modernen Nutzfahrzeug-Kofferlösung. Im Gegensatz zu herkömmlichen Kofferaufbauten mit fester Struktur bietet CubicCube mehr Flexibiliät und Anpassungsmöglichkeiten.
                    <br/>
                    <br/>
                    Die Marke &bdquo;CubicCube&ldquo; bedeutet wortwörtlich &bdquo;Kubikwürfel&ldquo; und vereint zwei Zentrale Eigenschaften: &bdquo;Kubik&ldquo; als Raummaß steht für das großzügige Raumangebot. &bdquo;Würfel&ldquo; als Sinnbild für die modulare Bauweise und Vielseitigkeit unserer Koffer.
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

    @media (width < 48rem) { 
        .smallHeadline{
            margin-top: 20px;
        }   
    }
    
</style>