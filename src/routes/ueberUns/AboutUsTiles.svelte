<script lang="ts">
    import '../../css/global.css';

    import AboutUsSingleTile from './AboutUsSingleTile.svelte';

    import effizient from '$lib/assets/images/Produkte/icon_effizent_grey.svg';
    import innovativ from '$lib/assets/images/Produkte/icon_innovativ_grey.svg';
    import langlebig from '$lib/assets/images/Produkte/icon_langlebig_grey.svg';
    import modular from '$lib/assets/images/Produkte/icon_modular_grey.svg';
    import nachhaltig from '$lib/assets/images/Produkte/icon_nachhaltig_grey.svg';
    import vielfaeltig from '$lib/assets/images/Produkte/icon_vielfaeltig_grey.svg';

    import effizient_back from '$lib/assets/images/Produkte/icon_effizent_lightgrey.svg';
    import innovativ_back from '$lib/assets/images/Produkte/icon_innovativ_lightgrey.svg';
    import langlebig_back from '$lib/assets/images/Produkte/icon_langlebig_lightgrey.svg';
    import modular_back from '$lib/assets/images/Produkte/icon_modular_lightgrey.svg';
    import nachhaltig_back from '$lib/assets/images/Produkte/icon_nachhaltig_lightgrey.svg';
    import vielfaeltig_back from '$lib/assets/images/Produkte/icon_vielfaeltig_lightgrey.svg';

</script>

<div class="pageWrapper">
    <div class="pageContent">
        <p class="fontStyleH6 fontColorC3 smallHeadline">Innovation</p>
        <p class="fontStyleH3 fontColorLight largeHeadline">Für Kommunen, Logistik, Transport, <br/> Handwerk und Reisen </p>       
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 carConfigurationGrid">
            <AboutUsSingleTile iconFront="{modular}" iconBack="{modular_back}" titleFront="Modularität" textBack="Im Gegensatz zu herkömmlichen Koffern mit fester Struktur bestehen die CubicCubes aus flexiblen Modulen, die es ermöglichen, den Kofferaufbau bedarfsabhängig in verschiedenen Varianten und Längen zu gestalten. <br/> <br/>Die modulare Bauweise bietet eine Vielzahl von Anwendungsmöglichkeiten und ermöglicht eine einfache Anpassung auf zahlreiche Fahrzeugmodelle." ></AboutUsSingleTile>
            <AboutUsSingleTile iconFront="{langlebig}" iconBack="{langlebig_back}" titleFront="Langlebigkeit" textBack="Hergestellt aus Aluminium sind die CubicCubes im Vergleich zu herkömmlichen Koffern leichter und weisen eine optimale Balance von Gewicht, Haltbarkeit und Korrosionsbeständigkeit auf." ></AboutUsSingleTile>
            <AboutUsSingleTile iconFront="{effizient}" iconBack="{effizient_back}" titleFront="Effizienz" textBack="Mehr Effizienz erreichen Sie nicht erst beim Einsatz unserer durchdachten Koffer, sondern bereits bei der Bestellung. Da die Koffer von CubicCube auf den Leiterrahmen zahlreicher Fahrgestelle passen oder mittels Adapter angepasst werden können, sind sie schnell lieferbar. Eine Montage auf Gebrauchtfahrzeuge ist ebenso möglich wie auf neuen Fahrgestellen." ></AboutUsSingleTile>
            <AboutUsSingleTile iconFront="{vielfaeltig}" iconBack="{vielfaeltig_back}" titleFront="Vielfältigkeit" textBack="Die modular gestalteten Koffer von CubicCube sind so konzipiert, dass sie erweitert werden können, indem zusätzliche Module oder Zubehörteile integriert werden. Diese Option ermöglicht es nicht nur mehrere Kompartimente oder mehr Stauraum zu schaffen, sondern macht die CubicCubes bei Kofferaufbauten zur ersten Wahl für zahlreiche Einsatzbereiche." ></AboutUsSingleTile>
            <AboutUsSingleTile iconFront="{nachhaltig}" iconBack="{nachhaltig_back}" titleFront="Nachhaltigkeit" textBack="Die Modularität des Koffersystems erleichtert die Wartung und Reparatur. Beschädigte oder abgenutzte Fahrgestelle können ausgetauscht werden, ohne dass das gesamte Fahrzeug ersetzt werden muss. Dies spart nicht nur Zeit und Geld, sondern macht das Fahrzeug schnell wieder einsatzbereit und schont die Umwelt." ></AboutUsSingleTile>
            <AboutUsSingleTile iconFront="{innovativ}" iconBack="{innovativ_back}" titleFront="Innovation" textBack="Die einzigartige Modularität des Kofferaufbaus gibt es nur bei CubicCube. Weitere Features wie in der Wand integrierbare Wassertanks sowie ausfahrbare Absperrarme hinten am Fahrzeug haben wir zum Patent anmelden lassen. Darüber hinaus können die Koffer von CubicCube mit einem ausfahrbaren Dach, das mittels hydraulischer Mechanismen betrieben wird, ausgestattet werden." ></AboutUsSingleTile>
        </div>
    </div>
</div>


<style>
    .pageWrapper
    {
        background-color: var(--colors-color5);
    }

    .largeHeadline
    {
        margin-top: 30px;
        margin-bottom: 50px;
    }
</style>