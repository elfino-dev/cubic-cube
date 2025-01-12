<script lang="ts">
    import '../css/global.css';

    let { title, body, icon, isHighlightedByDefault = false } = $props();
    let isHighlighted = $state(isHighlightedByDefault);

    
</script>

<div 
    class="sectionHightlightBox {isHighlighted ? 'sectionHightlightBoxHighlighted' : ''}" 
    onmouseenter={() => isHighlighted = true }
    onmouseleave={() => isHighlighted = false }
    aria-pressed={isHighlighted} 
    role="button"
    tabindex="0">

    <div class="highlightBoxIcon">
        <svelte:component this={icon} isHighlighted={isHighlighted} />
    </div>
    <h1 class="fontStyleH5 fontColorPrimary">{title}</h1>
    <div>
        <div>
            
        </div>
        
        <span class="fontStyleP highlightBoxBody">{body}</span>
    </div>
</div>

<style>
    .sectionHightlightBox h1
    {
        margin: 20px;
    }

    .sectionHightlightBox .highlightBoxIcon
    {
        height: 50px;
    }

    .sectionHightlightBox
    {
        color: var(--colors-color4);
        transition: all 300ms ease;
        background: linear-gradient(316.09deg, #203238 1.63%, #0F1E22 97.12%);
        border: 6px solid var(--colors-primary);
        border-radius: 35px;
    }

    .sectionHightlightBox > div,
    .sectionHightlightBox > h1
    {
        margin: 20px;
    }

    .sectionHightlightBox.sectionHightlightBoxHighlighted
    {
        transform: scale(1.1);
        background: linear-gradient(180.09deg, #203238 1.63%, #0F1E22 97.12%);
    }

    .sectionHightlightBox > div > h1
    {
        margin-top: 10pt;
    }

    .sectionHightlightBox > div > span
    {
        margin-top: 20pt;
    }
</style>