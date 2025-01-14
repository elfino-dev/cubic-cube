<script>   
    let { link, customStyle = '' } = $props();
</script>

<a href="{link}" style="{customStyle}">
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
        vertical-align: middle;
        cursor: pointer;
    }
</style>