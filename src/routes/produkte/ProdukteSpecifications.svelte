<script lang="ts">
    import '../../css/global.css';
	import ProdukteFrame from './ProdukteFrame.svelte';
	import ProdukteSingleSpecification from './ProdukteSingleSpecification.svelte';
    import productsCar from '$lib/assets/images/Produkte/ProdukteCar.png';
</script>

<ProdukteSingleSpecification anchorID="kurz" backgroundColor="#587278" title="Kurzer Radstand" desc="Ideal für kleine Anforderungen" carImage={productsCar} moduleCount="2" maxLength="5,267 m" maxWidth="2,345 m" maxHeight="2,120 m" cubeLength="3,180 m" cubeWidth="2,150 m" cubeHeight="1,950 m" weight="4 t" material="Aluminiumverkleidung">
    <div slot="information">Flachdach, Einzelräder, nur als Hydraulikwagen. <br/><br/><b>Auch als Hochdach erhältlich</b></div>
</ProdukteSingleSpecification>
<ProdukteSingleSpecification anchorID="mittelInspektion" backgroundColor="transparent"title="Mittlerer Radstand Inspektionsfahrzeug" desc="Unser Inspektionsfahrzeug" carImage={productsCar} moduleCount="2" maxLength="5,267 m" maxWidth="2,345 m" maxHeight="2,120 m" cubeLength="3,180 m" cubeWidth="2,150 m" cubeHeight="1,950 m" weight="4 t" material="Aluminiumverkleidung">
    <div slot="information">Flachdach, Einzelräder, nur als Hydraulikwagen. <br/><br/><b>Auch als Hochdach erhältlich</b></div>
</ProdukteSingleSpecification>
<ProdukteSingleSpecification anchorID="mittel" backgroundColor="#587278"title="Mittlerer Radstand" desc="Erfüllt die meisten Kundenwünsche" carImage={productsCar} moduleCount="2" maxLength="5,267 m" maxWidth="2,345 m" maxHeight="2,120 m" cubeLength="3,180 m" cubeWidth="2,150 m" cubeHeight="1,950 m" weight="4 t" material="Aluminiumverkleidung">
    <div slot="information">Flachdach, Einzelräder, nur als Hydraulikwagen. <br/><br/><b>Auch als Hochdach erhältlich</b></div>
</ProdukteSingleSpecification>
<ProdukteSingleSpecification anchorID="langInspektion" backgroundColor="transparent"title="Langer Radstand Inspektionsfahrzeug" desc="Unser großes Inspektionsfahrzeug mit langem Radstand" carImage={productsCar} moduleCount="2" maxLength="5,267 m" maxWidth="2,345 m" maxHeight="2,120 m" cubeLength="3,180 m" cubeWidth="2,150 m" cubeHeight="1,950 m" weight="4 t" material="Aluminiumverkleidung">
    <div slot="information">Flachdach, Einzelräder, nur als Hydraulikwagen. <br/><br/><b>Auch als Hochdach erhältlich</b></div>
</ProdukteSingleSpecification>
<ProdukteSingleSpecification anchorID="lang" backgroundColor="#587278"title="Langer Radstand" desc="Lässt keine Wünsche offen!" carImage={productsCar} moduleCount="2" maxLength="5,267 m" maxWidth="2,345 m" maxHeight="2,120 m" cubeLength="3,180 m" cubeWidth="2,150 m" cubeHeight="1,950 m" weight="4 t" material="Aluminiumverkleidung">
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