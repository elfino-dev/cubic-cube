<script lang="ts">   
    let { link, customStyle = '', onClick } = $props();

    function handleClicked(event: MouseEvent) 
    {
        if(onClick !== undefined)
            onClick(event);
    }
</script>

<a href="{link}" style="{customStyle}" on:click={handleClicked}>
    <slot></slot>
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