<script lang="ts">
    import '../css/global.css';

    let { title, body, icon, isHighlightedByDefault = false } = $props();
    let isHighlighted = $state(isHighlightedByDefault);

    
</script>

<div 
    class="sectionHightlightBox aspect-square {isHighlighted ? 'sectionHightlightBoxHighlighted' : ''}" 
    onmouseenter={() => isHighlighted = true }
    onmouseleave={() => isHighlighted = false }
    aria-pressed={isHighlighted} 
    tabindex="0">
    <div class="highlightBoxIcon">
        <img src={icon} alt="frontIcon"/>
    </div>
    <h1 class="fontStyleH5 fontColorPrimary highlightBoxTitle">{title}</h1>
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
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sectionHightlightBox .highlightBoxIcon img
    {
        margin-top: 30px;
        height: 60px;
        width: 60px;
    }

    .highlightBoxBody,
    .highlightBoxTitle
    {
        text-align: center;
        display: block;
    }

    .sectionHightlightBox
    {
        color: var(--colors-color4);
        transition: all 300ms ease;
        background: linear-gradient(316.09deg, #203238 1.63%, #0F1E22 97.12%);
        border-radius: 35px;
        border: 3px solid var(--colors-color5);
    }

    .sectionHightlightBox > div,
    .sectionHightlightBox > h1
    {
        margin: 20px;
    }

    .sectionHightlightBox.sectionHightlightBoxHighlighted
    {
        border-color: var(--colors-primary);
    }

    .sectionHightlightBox > div > span
    {
        margin-top: 20pt;
    }
</style>