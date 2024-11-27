<script lang="ts">
    import '../css/global.css';
    import logo from '$lib/assets/images/cubicCubeLogo.png';
</script>

<div class="grid grid-cols-7 headerGrid">
    <div class="align-middle">
        <img alt="Cubic Cube" src={logo} />
    </div>
    <div class="align-middle pageButton">Home</div>
    <div class="align-middle pageButton">Über uns</div>
    <div class="align-middle pageButton">Produkte</div>
    <div class="align-middle pageButton">Team</div>
    <div class="align-middle pageButton">Kontakt</div>
    <div class="align-middle pageButton">
        <div class="getAdvisedNow" style="">Jetzt beraten lassen</div>
    </div>
</div>

<style>
    .headerGrid
    {
        height: 91px; 
    }

    .headerGrid > div
    {
        margin: auto;
        color: var(--colors-light);
    }

    .headerGrid > div > .getAdvisedNow
    {
        padding:10px; 
        background-color:var(--colors-primary);
        color:var(--colors-color2); 
        text-align: center;
        height: 40px;
        line-height: 20px;
        vertical-align: middle;
    }
</style>