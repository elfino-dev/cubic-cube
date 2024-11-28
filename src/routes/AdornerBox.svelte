<script>   
    let { customStyle = '' } = $props();
</script>

<div class="adornerBox" style="{customStyle}"></div>

<style>
    .adornerBox
    {
        border: 6px solid var(--colors-secondary);
        border-radius: 20px;
        height: 150px; 
        width: 150px;        
    }
</style>