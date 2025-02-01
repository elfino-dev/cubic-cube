<script lang="ts">
    import '../css/global.css';
    import Button from './Button.svelte';
    import teaser from '$lib/assets/images/TeaserImage.png';
    //import StickyHeader from './StickyHeader.svelte';
</script>
<div class="pageWrapper">
    <div id="square1"></div>
    <div id="square2"></div>


    <div class="pageContent">
        
        <div class="flex items-center justify-center"> 
            <div class="teaserContentWrapper"> 
                <h4 class="fontStyleH6 fontColorPrimary">CubicCube: <br/>Die innovative Nutzfahrzeug-Kompaktlösung</h4>
                <h1 class="fontStyleH1 fontColorLight">Flexible Lösungen durch modulare Bauweise</h1>
            </div> 
        </div>
        
    </div>
</div>


<style>
    #square1
    {
        position: absolute;
        right: 80vw;
        top: calc((100vh - 3000px) / 2);
        width: 3000px;
        height: 3000px;
        border-radius: 120px;
        transform: rotate(45deg);
        background-color: #415D63CC;
    }

    #square2
    {
        position: absolute;
        right: calc(80vw - 25px);
        top: calc((100vh - 3050px) / 2);
        width: 3050px;
        height: 3050px;
        border-radius: 144px;
        transform: rotate(45deg);
        border: 10px solid var(--colors-primary);
    }

    .pageWrapper{
        position: relative;
        background: url("$lib/assets/images/TeaserImage.png") no-repeat;
        background-position: center top;
        background-size: auto 100%;
        height: 100vh;
    }

    .teaserContentWrapper
    {
        position: absolute;
        left: 10vw;
        top: 50vh;
        transform: translateY(-50%);
        margin: 0;
        width: 45vh;
    }

    .teaserContentWrapper > *
    {
        vertical-align: middle;
    }

    .pageContent
    {
        margin-top:0;
        padding-top:0;
    }
</style>