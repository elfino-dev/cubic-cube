<script lang="ts">
    import '../../css/global.css';

    let { leftSquareColor, rightSquareColor } = $props();
</script>

<div class="pageWrapper">
    <div class="square1" style="--square-color: {leftSquareColor};"></div>
    <div class="square2" style="border-color: {rightSquareColor}"></div>


    <div class="pageContent">
        <div class="content"> 
            <div class="flex items-center justify-center"> 
                <div class="teaserContentWrapper"> 
                    
                </div>
            </div>
        </div> 
    </div>
</div>


<style>
    .pageWrapper{
        background: url("$lib/assets/images/Datenschutz/background1.png") no-repeat;
        background-size: cover; 
        background-position: 100% 30%;
        position: relative;
    }

    .pageContent
    {
        padding: 0 !important;
    }

    .square1
    {
        position: absolute;
        max-width: 914px;
        max-height: 914px;
        width: 65vw;
        height: 65vw;
        border-radius: min(100px, 10vw);
        z-index: 0;
        left: max(-150px, -15vw);
        bottom: max(-500px ,-40vw);
        transform: rotate(45deg);
        border-width: 12px;
        border-color: var(--square-color);
    }

    .square1::after
    {
        background-color: var(--square-color);
        position: absolute;
        width: 90%;
        height: 90%;
        border-radius: min(100px, 8vw);
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        z-index: 0;        
        opacity: 0.8;
        content: '';
    }

    .square2
    {
        position: absolute;
        max-width: 618px;
        max-height: 618px;
        width: 50vw;
        height: 50vw;
        border-radius: 10vw;
        z-index: 0;
        transform: rotate(45deg);
        right: -13vw;
        top: -13vw;
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
</style>