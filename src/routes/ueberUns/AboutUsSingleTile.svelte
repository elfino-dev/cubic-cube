<script lang="ts">
	import ArrowTopRight from "$lib/assets/images/Common/ArrowTopRight.svelte";
    import { goto } from '$app/navigation';

    let { iconFront, iconBack, titleFront, textBack } = $props();
</script>


<div class="card aspect-square transform-gpu">
    <div class="content transform-gpu">
        <div class="front" >
            <div class="flex flex-column justify-center items-center">
                <img src={iconFront} alt="frontIcon"/>
                <span class="fontStyleH6">{titleFront}</span>
            </div>
          </div>
        <div class="back">
            <div class="flex flex-column justify-center items-center">
                <img src={iconBack} alt="backIcon"/>
                <span class="fontStyleP">{@html textBack}</span>
            </div>
        </div>
    </div>	
</div>


<style>
    /* Container box to set the sides relative to */

    @media (max-width: 1279px) 
    {
        .card .back span{
            font-size: 18px;
        }
    }

    .card {
        position: relative;
    }

    .content {
        position: absolute;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 15px rgba(0,0,0,0.1);

        transition: transform 1s;
        transform-style: preserve-3d;
    }

    .card:hover .content {
        transform: rotateY( 180deg ) ;
        transition: transform 0.5s;
    }

    .front,
    .back {
        position: absolute;
        height: 100%;
        width: 100%;
        background: var(--colors-primary);
        color: var(--colors-color2);
        text-align: center;
        border-radius: 35px;
        backface-visibility: hidden;
    }

    .front > div,
    .back > div
    {
        position: relative;
        flex-grow: 1;
        height: 100%;
        flex-grow: 1;
        flex-direction: column;
    }

    .back > div > span
    {
        margin: 15px;
    }


    .front img
    {
        height: 50px;
        margin-bottom: 20px;
    }

    .back img
    {        
        position: absolute;
        height: 80%;
        z-index: -1;
    }

    .back {
        background: var(--colors-color2);
        color: white;
        transform: rotateY( 180deg );
        font-size: 20px;
    }
</style>