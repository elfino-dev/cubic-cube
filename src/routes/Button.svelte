<script lang="ts">
	import { render } from "svelte/server";

   
    let { link, customStyle = '', onClick, children } = $props();

    function handleClicked(event: MouseEvent) 
    {
        if(onClick !== undefined)
            onClick(event);
    }
</script>

<a href="{link}" style="{customStyle}" onclick={handleClicked}>
    {@render children()}
</a>

<style>
    a{
        display: inline-block;
        padding:10px; 
        background-color:var(--colors-primary);
        color:var(--colors-color2); 
        text-align: center;
        height: 40px;
        line-height: 20px;
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
    }
</style>