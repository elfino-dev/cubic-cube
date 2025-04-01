<script lang="ts">
    import '../../css/global.css';
    import ProdukteSingleSpecification from './ProdukteSingleSpecification.svelte';
    
    import cc1 from '$lib/assets/images/OurServices/CC K HD rechts@4x.svg';
    import cc2 from '$lib/assets/images/OurServices/CC M FD rechts@4x.svg';
    import cc3 from '$lib/assets/images/OurServices/CC M HD rechts@4x.svg';
    import cc4 from '$lib/assets/images/OurServices/CC L FD rechts@4x.svg';
    import cc5 from '$lib/assets/images/OurServices/CC L HD rechts@4x.svg';

    import kc1 from '$lib/assets/images/OurServices/KC M MD rechts@4x.svg';
    import kc2 from '$lib/assets/images/OurServices/KC L HD rechts@4x.svg';

</script> 

<div>
    <!-- <ProdukteSingleSpecification 
            anchorID="kurz" 
            backgroundColor="#415D63"
            backgroundCellColor="#587278" 
            title="Kurzer Radstand" 
            desc="Ideal für kleine Anforderungen" 
            carImage={cc1} 
            moduleCount="2" 
            maxLength="5350 mm" 
            maxWidth="2150 mm" 
            maxHeight="2770 mm" 
            cubeLength="3200 mm" 
            cubeWidth="2150 mm" 
            cubeHeight="1950 mm"
            weight="4t" 
            material="Aluminiumverkleidung">
        <div slot="information">Flachdach<br/><br/><b>Auch als Hochdach erhältlich</b></div>
    </ProdukteSingleSpecification> --> 

    <ProdukteSingleSpecification 
            anchorID="mittel" 
            backgroundColor="#587278"
            backgroundCellColor="#415D63"
            title="Mittlerer Radstand, Flachdach" 
            desc="Unser Allrounder" 
            carImage={cc2} 
            moduleCount="3" 
            maxLength="6150 mm" 
            maxWidth="2150 mm" 
            maxHeight="2770 mm" 
            cubeLength="3600 mm" 
            cubeWidth="2150 mm" 
            cubeHeight="1950 mm" 
            weight="5t (zulässiges Gesamtgewicht)" 
            material="Aluminiumverkleidung"
            specials="Im vorderen Modul rechts / links, sowie hinten: Rollläden"
            information="Flachdach<br/><br/><b>Auch als Hochdach und optional als Spülfahrzeug erhältlich!</b>">
    </ProdukteSingleSpecification>

    <ProdukteSingleSpecification 
            anchorID="mittelHochdach" 
            backgroundColor="#415D63"
            backgroundCellColor="#587278"
            title="Mittlerer Radstand, Hochdach" 
            desc="Für mehr Geräumigkeit" 
            carImage={cc3} 
            moduleCount="3" 
            maxLength="6150 mm" 
            maxWidth="2150 mm" 
            maxHeight="2940 mm" 
            cubeLength="3600 mm" 
            cubeWidth="2150 mm" 
            cubeHeight="2120 mm"  
            weight="5t (zulässiges Gesamtgewicht)" 
            material="Aluminiumverkleidung"
            specials="Im vorderen Modul rechts / links, sowie hinten: Rollläden"
            information="Hochdach<br/><br/><b>Auch als Flachdach und optional als Spülfahrzeug erhältlich!</b>">
    </ProdukteSingleSpecification>

    <ProdukteSingleSpecification 
            anchorID="lang" 
            backgroundColor="#587278"
            backgroundCellColor="#415D63"
            title="Langer Radstand, Flachdach" 
            desc="Lässt keine Wünsche offen!" 
            carImage={cc4} 
            moduleCount="3" 
            maxLength="6870 mm" 
            maxWidth="2150 mm" 
            maxHeight="2770 mm" 
            cubeLength="4260 mm" 
            cubeWidth="2150 mm" 
            cubeHeight="1950 mm" 
            weight="5t (zulässiges Gesamtgewicht)" 
            material="Aluminiumverkleidung"
            specials="Im vorderen Modul rechts / links, sowie hinten: Rollläden"
            information="Flachdach<br/><br/><b>Auch als Hochdach und optional als Spülfahrzeug erhältlich!</b>">
    </ProdukteSingleSpecification>

    <ProdukteSingleSpecification 
            anchorID="langHochdach" 
            backgroundColor="#415D63"
            backgroundCellColor="#587278"
            title="Langer Radstand, Hochdach" 
            desc="Unser größter Cube" 
            carImage={cc5} 
            moduleCount="3" 
            maxLength="6870 mm" 
            maxWidth="2150 mm" 
            maxHeight="2940 mm" 
            cubeLength="4260 mm" 
            cubeWidth="2150 mm" 
            cubeHeight="2120 mm" 
            weight="5t (zulässiges Gesamtgewicht)" 
            material="Aluminiumverkleidung"
            specials="Im vorderen Modul rechts / links, sowie hinten: Rollläden"
            information="Hochdach<br/><br/><b>Auch als Flachdach und optional als Spülfahrzeug erhältlich!</b>">
    </ProdukteSingleSpecification>

    <ProdukteSingleSpecification 
            anchorID="inspektionsFahrzeugTVWagen" 
            backgroundColor="#587278"
            backgroundCellColor="#415D63" 
            title="Inspektionsfahrzeug (TV-Wagen)" 
            desc="Unser Inspektionsfahrzeug als TV Wagen" 
            carImage={kc1} 
            moduleCount="3" 
            maxLength="6150 mm" 
            maxWidth="2150 mm" 
            maxHeight="2940 mm" 
            cubeLength="3600 mm" 
            cubeWidth="2150 mm" 
            cubeHeight="2120 mm"  
            weight="5t (zulässiges Gesamtgewicht)" 
            material="Aluminiumverkleidung"
            specials="Vorderes Modul in Fahrtrichtung rechts: Türe"
            information="Hochdach">
    </ProdukteSingleSpecification>

    <ProdukteSingleSpecification 
            anchorID="inspektionsUndSpuelfahrzeug" 
            backgroundColor="#415D63"
            backgroundCellColor="#587278"
            title="Inspektions- und Spülfahrzeug" 
            desc="Vereint Inspektions- und Spülfahrzeug" 
            carImage={kc2} 
            moduleCount="4" 
            maxLength="6870 mm" 
            maxWidth="2150 mm" 
            maxHeight="2940 mm" 
            cubeLength="4260 mm" 
            cubeWidth="2150 mm" 
            cubeHeight="2120 mm" 
            weight="5t (zulässiges Gesamtgewicht)" 
            material="Aluminiumverkleidung"
            specials="Vorderes Modul in Fahrtrichtung rechts: Türe"
            information="Hochdach">
    </ProdukteSingleSpecification>
</div>