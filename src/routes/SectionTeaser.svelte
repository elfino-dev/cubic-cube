<script lang="ts">
    import '../css/global.css';
    import Button from './Button.svelte';
    import teaser from '$lib/assets/images/TeaserImage.png';
</script>

<div class="pageWrapper">
    <div class="square1"/>
    <div class="square2"/>
    <div class="square3"/>
    <div class="square4"/>
    <div class="square5"/>
    <div class="square6"/>
    <div class="square7"/>


    <div class="pageContent">
        <div class="sectionHighlightBox grid grid-cols-2 gap-[50px]">
            <div class="teaserImage"></div>
            <div class="flex items-center justify-center"> 
                <div class="teaserContentWrapper"> 
                    <span class="fontColorLight">Die innovative Nutzfahrzeug-Kompaktlösung</span>
                    <h4 class="fontStyleH4 fontColorLight">Flexible Lösungen durch modulare Bauweise</h4>
                    <Button>Jetzt beraten lassen</Button>
                </div> 
            </div>
        </div>
    </div>
</div>


<style>
    @keyframes rotation {
        0% {
            transform: rotate(45deg);
            left: -10%;
            opacity:0;
            transform: scale(1f)
        }
        30%{
            opacity: 0.5;
        }
        70%{
            opacity: 0.5;
        }
        100% {
            transform: rotate(145deg);
            left: 110%;
            opacity: 0;
            transform: scale(0.2f)
        }
    }

    .pageWrapper{
        position: relative;
    }
    .square1
    {
        animation: rotation 60s infinite linear;
        position: absolute;
        width: 500px;
        height: 500px;
        border: 10px solid #41707F; 
        border-radius: 50px;
        z-index: 0;
        top: 20%;
    }
    .square2
    {
        animation: rotation 60s infinite linear;
        animation-delay: 10s;
        opacity: 0;
        position: absolute;
        width: 200px;
        height: 200px;
        border: 7px solid #41707F; 
        border-radius: 20px;
        z-index: 0;
        top: 40%
    }
    .square3
    {
        animation: rotation 60s infinite linear;
        animation-delay: 20s;
        opacity: 0;
        position: absolute;
        width: 50px;
        height: 50px;
        border: 5px solid #41707F; 
        border-radius: 10px;
        z-index: 0;
        top: 20%;
    }
    .square4
    {
        animation: rotation 60s infinite linear;
        animation-delay: 30s;
        opacity: 0;
        position: absolute;
        width: 300px;
        height: 300px;
        border: 7px solid #41707F; 
        border-radius: 20px;
        z-index: 0;
        top: 60%;
    }
    .square5
    {
        animation: rotation 60s infinite linear;
        animation-delay: 35s;
        opacity: 0;
        position: absolute;
        width: 120px;
        height: 120px;
        border: 5px solid #41707F; 
        border-radius: 20px;
        z-index: 0;
        top: 30%;
    }
    .square6
    {
        animation: rotation 60s infinite linear;
        animation-delay: 40s;
        opacity: 0;
        position: absolute;
        width: 110px;
        height: 110px;
        border: 5px solid #41707F; 
        border-radius: 20px;
        z-index: 0;
        top: 50%;
    }
    .square7
    {
        animation: rotation 60s infinite linear;
        animation-delay: 45s;
        opacity: 0;
        position: absolute;
        width: 100px;
        height: 100px;
        border: 5px solid #41707F; 
        border-radius: 20px;
        z-index: 0;
        top: 70%;
    }

    .teaserContentWrapper > *
    {
        margin: 20px 0;
    }

    .teaserImage
    {
        background: url("$lib/assets/images/TeaserImage.png") no-repeat;
        background-size: 100%;
        width: 100%;
        height: 606px;
        position: relative;
        overflow: hidden;
    }
</style>