<script>   
    let { customStyle = '' } = $props();
</script>

<p style="{customStyle}">
    <slot></slot>
</p>

<style>
    p{
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