<script lang="ts">
	import ArrowTopRight from "$lib/assets/images/Common/ArrowTopRight.svelte";
    import Button from "./Button.svelte";

    let { link, title, buzzwords, description, imgSrc } = $props();
</script>

<div class="carConfigurationBox">
    <div class="carConfigurationHighlightBorder">
        <div class="buttonWrapper">
            <Button link={link} customStyle="aspect-ratio: 1 / 1;"><ArrowTopRight></ArrowTopRight></Button>
        </div>
        <img src="{imgSrc}" alt={title}/>
            <div class="carTitle fontStyleH6 fontColorPrimary">{title}</div>
            <div class="carBuzzwords fontStyleH4 fontColorLight">{buzzwords}</div>
            <div class="carDescription fontStyleP fontColorLight ">{description}</div>
    </div>    
</div>

<style>
    .carConfigurationBox
    {
        position: relative;
        background-color: teal;
        border-radius: 35px;
        background: linear-gradient(to top right, #0F1E22 0%, #0F1E22 50%, #4492A7 75%,#66B4C8 100%);
        background-size: 300% 300%;
        background-position: 0%;
        padding: 20px;
        transition: background-position 0.2s ease-in-out, filter 0.2s ease-in-out;
    }

    .carConfigurationBox:hover
    {
        background-color: teal;
        border-radius: 35px;
        background-position: 100%;
        filter: drop-shadow(3px 3px 10px #000000); 
    }

    .buttonWrapper
    {
        position: absolute; 
        top: 20px;
        right: 20px;
        height: 40px;
        width: 40px;
        aspect-ratio: 1 / 1;
    }

    .carTitle, 
    .carBuzzwords, 
    .carDescription
    {
        margin: 0 auto;
    }

    .carDescription
    {
        padding-top:20px;
    }
</style>