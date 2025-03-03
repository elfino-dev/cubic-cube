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

input
{
    margin: 0;
    border: 0;
    background-color: var(--colors-color2);
    display: inline-block;
    color: var(--colors-light);
    font-size: 17px;
}

@media (max-width: 1279px) 
{
    input
    {
        width: calc(100% - 50px);
    }
}   

@media (min-width: 1280px) 
{
    .wrapper
    {
        margin-top:130px;
    }

    input
    {
        width: 270px;
    }
}   
</style>