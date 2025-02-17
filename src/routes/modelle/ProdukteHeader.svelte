<script lang="ts">
    import '../../css/global.css';

    let { leftSquareColor, rightSquareColor } = $props();
</script>

<div class="pageWrapper">
    <div class="square1" style="border-color: {leftSquareColor}"></div>
    <div class="square2" style="background-color: {leftSquareColor}"></div>

    <div class="square3" style="border-color: {rightSquareColor}"></div>


    <div class="pageContent">
        <div class="content"> 
            <div class="flex items-center justify-center"> 
                <div class="teaserContentWrapper"> 
                    <!-- <h2 class="fontStyleH2 fontColorLight">Unsere Cubes</h2> -->
                </div>
            </div>
        </div> 
    </div>
</div>


<style>
    .pageWrapper{
        background: url("$lib/assets/images/Imagebild_CC_Strasse.png") no-repeat;
        background-size: 100% auto;
        background-position: 50% 55%;
        position: relative;
    }

    .pageContent
    {
        padding: 0 !important;
    }

    .square1
    {
        position: absolute;
        width: 914px;
        height: 914px;
        border-radius: 130px;
        z-index: 0;
        transform: rotate(45deg);
        left: -300px;
        bottom: -520px;
        border-width: 12px;
    }

    .square2
    {
        position: absolute;
        width: 846px;
        height: 846px;
        border-radius: 90px;
        z-index: 0;
        transform: rotate(45deg);
        left: -268px;
        bottom: -500px;
        
        opacity: 0.8;
    }

    .square3
    {
        position: absolute;
        width: 618px;
        height: 618px;
        border-radius: 120px;
        z-index: 0;
        transform: rotate(45deg);
        right: -200px;
        top: -200px;
        border-width: 12px;
    }
    
    

    .content
    {
        height: 616px;
    }

    .content > *
    {
        height: 100%;
    }

    .teaserContentWrapper > *
    {
        width: 100%;
        text-align: center;
    }
</style>