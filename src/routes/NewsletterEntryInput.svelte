<script>
    import Button from './Button.svelte';
    import Arrow from "$lib/assets/images/Common/Arrow.svelte";
</script>

<div class="wrapper">
    <h1 class="fontStyleH6 fontColorPrimary" style="padding-bottom:20px;">Jetzt beraten lassen</h1>
    <div>
        <input placeholder="E-Mail"/> <Button customStyle="aspect-ratio: 1 / 1; display: inline-block;"><Arrow></Arrow></Button>
    </div>
</div>
<style>
    .wrapper
    {
        margin-top:130px;
    }

    input
    {
        margin: 0;
        border: 0;
        background-color: var(--colors-color2);
        width: 270px;
        display: inline-block;
        color: var(--colors-light);
        font-size: 17px;
    }
    
</style>