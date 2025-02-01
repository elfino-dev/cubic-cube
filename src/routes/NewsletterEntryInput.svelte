<script>
    import Button from './Button.svelte';
    import Arrow from "$lib/assets/images/Common/Arrow.svelte";
</script>

<div>
    <h1 class="fontStyleH6 fontColorPrimary" style="padding-bottom:20px;">Jetzt beraten lassen</h1>
    <input placeholder="E-Mail"/> <Button customStyle="aspect-ratio: 1 / 1; display: inline-block;"><Arrow></Arrow></Button>
</div>
<style>
    div
    {
        margin-top:130px;
    }

    input
    {
        background-color: var(--colors-color2);
        width: 270px;
        display: inline-block;
        color: var(--colors-light);
        font-size: 17px;
    }
    
</style>