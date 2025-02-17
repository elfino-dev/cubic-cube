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
            <AboutUsSingleTile iconFront="{modular}" iconBack="{modular_back}" titleFront="test" textBack="Im Gegensatz zu herkömmlichen Koffern mit fester Struktur bestehen die CubicCubes aus flexiblen Modulen, die es ermöglichen, den Kofferaufbau bedarfsabhängig in verschiedenen Varianten und Längen zu gestalten. <br/> <br/>Die modulare Bauweise bietet eine Vielzahl von Anwendungsmöglichkeiten und ermöglicht eine einfache Anpassung auf zahlreiche Fahrzeugmodelle." ></AboutUsSingleTile>
            <AboutUsSingleTile iconFront="{langlebig}" iconBack="{langlebig_back}" titleFront="Langlebigkeit" textBack="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam" ></AboutUsSingleTile>
            <AboutUsSingleTile iconFront="{effizient}" iconBack="{effizient_back}" titleFront="Effizienz" textBack="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam" ></AboutUsSingleTile>
            <AboutUsSingleTile iconFront="{vielfaeltig}" iconBack="{vielfaeltig_back}" titleFront="Vielfältigkeit" textBack="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam" ></AboutUsSingleTile>
            <AboutUsSingleTile iconFront="{nachhaltig}" iconBack="{nachhaltig_back}" titleFront="Nachhaltigkeit" textBack="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam" ></AboutUsSingleTile>
            <AboutUsSingleTile iconFront="{innovativ}" iconBack="{innovativ_back}" titleFront="Innovation" textBack="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam" ></AboutUsSingleTile>
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