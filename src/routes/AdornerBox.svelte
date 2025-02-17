<script>   
    let { customStyle = '', customClass = '' } = $props();
</script>

<div class="adornerBox {customClass}" style="{customStyle}"></div>

<style>
    .adornerBox
    {
        border: 6px solid var(--colors-secondary);
        border-radius: 35px;
        height: 150px; 
        width: 150px;        
    }
</style>