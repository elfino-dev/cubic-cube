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

<ProdukteSingleSpecification 
        anchorID="kurz" 
        backgroundColor="#415D63"
        backgroundCellColor="#587278" 
        title="Kurzer Radstand" 
        desc="Ideal für kleine Anforderungen" 
        carImage={cc1} 
        moduleCount="2" 
        maxLength="5,267 m" 
        maxWidth="2,345 m" 
        maxHeight="2,120 m" 
        cubeLength="3,180 m" 
        cubeWidth="2,150 m" 
        cubeHeight="1,950 m"
        weight="4 t" 
        material="Aluminiumverkleidung">
    <div slot="information">Flachdach, Einzelräder, nur als Hydraulikwagen. <br/><br/><b>Auch als Hochdach erhältlich</b></div>
</ProdukteSingleSpecification>

<ProdukteSingleSpecification 
        anchorID="mittel" 
        backgroundColor="#587278"
        backgroundCellColor="#415D63"
        title="Mittlerer Radstand" 
        desc="Unser Allrounder" 
        carImage={cc2} 
        moduleCount="2" 
        maxLength="5,267 m" 
        maxWidth="2,345 m" 
        maxHeight="2,120 m" 
        cubeLength="3,180 m" 
        cubeWidth="2,150 m" 
        cubeHeight="1,950 m" 
        weight="4 t" 
        material="Aluminiumverkleidung">
    <div slot="information">Flachdach, Einzelräder, nur als Hydraulikwagen. <br/><br/><b>Auch als Hochdach erhältlich</b></div>
</ProdukteSingleSpecification>

<ProdukteSingleSpecification 
        anchorID="mittelHochdach" 
        backgroundColor="#415D63"
        backgroundCellColor="#587278"
        title="Mittlerer Radstand, Hochdach" 
        desc="Für mehr Geräumigkeit" 
        carImage={cc3} 
        moduleCount="2" 
        maxLength="5,267 m" 
        maxWidth="2,345 m" 
        maxHeight="2,120 m" 
        cubeLength="3,180 m" 
        cubeWidth="2,150 m" 
        cubeHeight="1,950 m" 
        weight="4 t" 
        material="Aluminiumverkleidung">
    <div slot="information">Flachdach, Einzelräder, nur als Hydraulikwagen. <br/><br/><b>Auch als Hochdach erhältlich</b></div>
</ProdukteSingleSpecification>

<ProdukteSingleSpecification 
        anchorID="lang" 
        backgroundColor="#587278"
        backgroundCellColor="#415D63"
        title="Langer Radstand" 
        desc="Lässt keine Wünsche offen!" 
        carImage={cc4} 
        moduleCount="2" 
        maxLength="5,267 m" 
        maxWidth="2,345 m" 
        maxHeight="2,120 m" 
        cubeLength="3,180 m" 
        cubeWidth="2,150 m" 
        cubeHeight="1,950 m" 
        weight="4 t"
        material="Aluminiumverkleidung">
    <div slot="information">Flachdach, Einzelräder, nur als Hydraulikwagen. <br/><br/><b>Auch als Hochdach erhältlich</b></div>
</ProdukteSingleSpecification>

<ProdukteSingleSpecification 
        anchorID="langHochdach" 
        backgroundColor="#415D63"
        backgroundCellColor="#587278"
        title="Langer Radstand, Hochdach" 
        desc="Unser größter Cube" 
        carImage={cc5} 
        moduleCount="2" 
        maxLength="5,267 m" 
        maxWidth="2,345 m" 
        maxHeight="2,120 m" 
        cubeLength="3,180 m" 
        cubeWidth="2,150 m" 
        cubeHeight="1,950 m" 
        weight="4 t" 
        material="Aluminiumverkleidung">
    <div slot="information">Flachdach, Einzelräder, nur als Hydraulikwagen. <br/><br/><b>Auch als Hochdach erhältlich</b></div>
</ProdukteSingleSpecification>

<ProdukteSingleSpecification 
        anchorID="mittelHochdachInspektion" 
        backgroundColor="#587278"
        backgroundCellColor="#415D63" 
        title="Mittlerer Radstand, Inspektionsfahrzeug, Hochdach" 
        desc="Unser Inspektionsfahrzeug mit mittlerem Radstand" 
        carImage={kc1} 
        moduleCount="2" 
        maxLength="5,267 m" 
        maxWidth="2,345 m" 
        maxHeight="2,120 m" 
        cubeLength="3,180 m" 
        cubeWidth="2,150 m" 
        cubeHeight="1,950 m" 
        weight="4 t"
        material="Aluminiumverkleidung">
    <div slot="information">Flachdach, Einzelräder, nur als Hydraulikwagen. <br/><br/><b>Auch als Hochdach erhältlich</b></div>
</ProdukteSingleSpecification>

<ProdukteSingleSpecification 
        anchorID="langHochdachInspektion" 
        backgroundColor="#415D63"
        backgroundCellColor="#587278"
        title="Langer Radstand, Inspektionsfahrzeug, Hochdach" 
        desc="Unser größtes Inspektionsfahrzeug" 
        carImage={kc2} 
        moduleCount="2" 
        maxLength="5,267 m" 
        maxWidth="2,345 m" 
        maxHeight="2,120 m" 
        cubeLength="3,180 m" 
        cubeWidth="2,150 m" 
        cubeHeight="1,950 m" 
        weight="4 t" 
        material="Aluminiumverkleidung">
    <div slot="information">Flachdach, Einzelräder, nur als Hydraulikwagen. <br/><br/><b>Auch als Hochdach erhältlich</b></div>
</ProdukteSingleSpecification>


<style>

    .pageContent
    {   
        padding: 50px 0;
    }

    .pageContent th:not(:first-child)
    {
        background-color: var(--colors-primary);
        color: var(--colors-light);
        text-align: center;
        height: 59px;
    }
</style>