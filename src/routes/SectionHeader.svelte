<script lang="ts">
    import '../css/global.css';
    import logo from '$lib/assets/images/cubicCubeLogo.png';
    import Button from './Button.svelte';

    let { customClass = '' } = $props();
</script>

<div class="pageWrapper">
    <div class="pageContent">
        <div class="grid grid-cols-7 headerGrid {customClass}">
            <div class="align-middle">
                <img alt="Cubic Cube" src={logo} />
            </div>
            <div class="align-middle pageButton">Home</div>
            <div class="align-middle pageButton">Über uns</div>
            <div class="align-middle pageButton">Produkte</div>
            <div class="align-middle pageButton">Team</div>
            <div class="align-middle pageButton">Kontakt</div>
            <div class="align-middle">
                <Button>Jetzt beraten lassen</Button>
            </div>
        </div>
    </div>
</div>

<style>
    .pageContent
    {
        padding: 0;
    }

    .headerGrid
    {
        height: 91px; 
    }

    .headerGrid > div
    {
        margin: auto;
        color: var(--colors-light);
    }

    .pageButton{
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 17pt;
        padding: 5px 10px;
        border-radius: 10px;
        position: relative;
        cursor: pointer;
    }

    .pageButton:before,
    .pageButton:after
    {
        content: '';
        display: block;
        position: absolute;
        width: 0%;
        border-top: 3px solid var(--colors-primary);
        transition: all 0.2s ease-in-out;
    }

    .pageButton:before
    {
        left: 0%;
        top: 0;
    }

    .pageButton:after
    {
        left: 100%;
        bottom: 0;
    }
    
    .pageButton:hover:before,
    .pageButton:hover:after
    {
        width: 100%;
    }

    .pageButton:hover:after
    {
        left: 0%;
    }
</style>