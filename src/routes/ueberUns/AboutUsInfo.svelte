<script lang="ts">
    import '../../css/global.css';

    import car2 from '$lib/assets/images/OurServices/CC M FD rechts@4x.svg';
</script>

<div class="pageWrapper">
    <div class="pageContent">

        <div class="carDetailWrapper">
            <div class="singleCar grid grid-cols-1 xl:grid-cols-2 gap-[20px]">
                <div class="singleCarImage" style='background-image: url("{car2}"); background-position: 50% 100%; background-repeat: no-repeat;'>

                </div>
                <div>
                    <p class="fontStyleH6 fontColorC3 smallHeadline">CubicCube</p>
                    <p class="fontStyleH3 fontColorLight largeHeadline">Ihr Experte für innovative Aufbauten</p>       
                    <p class="fontColorLight description fontStyleP">
                        Die CubiCube GmbH wurde mit dem Ziel gegründet, hochwertige Fahrzeugaufbauten sowie Innenausbauten zu entwickeln, die sich durch ihre Modularität und Effizienz auszeichnen.

Als innovatives Start-Up Unternehmen und Teil der elfino-Group mit Sitz in der Technologieregion Karlsruhe verbindet die CubicCube GmbH Fachwissen aus über 15 Branchen mit Unternehmergeist. Mit einem motivierten Team bestehend aus Ingenieuren, Handwerkern und Entwicklern aus den Bereichen Sondermaschinenbau, Elektrotechnik sowie der Rohr- und Kanalreinigung entwickelt die CubicCube GmbH flexible Kompaktlösungen mit dem Potenzial einen neuen Standard zu setzen.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>


<style>
    .carDetailWrapper
    {
        position: relative;
    }

    .largeHeadline
    {
        margin-top: 10px;
        margin-bottom: 50px;
    }

    @media (width >= 80rem) 
    {
        .singleCarImage
        {
            width: 96%; height: 100%;
        }
    }

    @media (width < 80rem) 
    {
        .singleCarImage
        {
            height: 35vw;
            margin-bottom: 20px;
        }
    }
</style>