<script lang="ts">
    import '../css/global.css';

    let { title, body, icon } = $props();
    let isHighlighted = $state(false);
</script>

<div 
    class="sectionHightlightBox {isHighlighted ? 'sectionHightlightBoxHighlighted' : ''}" 
    onmouseenter={() => isHighlighted = true }
    onmouseleave={() => isHighlighted = false }
    aria-pressed={isHighlighted} 
    role="button"
    tabindex="0">
    <div>
        <div>
            <svelte:component this={icon} isHighlighted={isHighlighted} />
        </div>
        <h1 class="fontStyleH5">{title}</h1>
        <span class="fontStyleP highlightBoxBody">{body}</span>
    </div>
</div>

<style>

    .sectionHightlightBox
    {
        color: var(--colors-color4);
        transition: all 500ms ease;
    }

    .sectionHightlightBox > div
    {
        width: 236pt;
        margin: 10px auto;
    }

    .sectionHightlightBox.sectionHightlightBoxHighlighted
    {
        margin-top: -30pt;
        margin-bottom: -30pt;
        background-color: var(--colors-primary);
        color: var(--colors-color2);
        border-radius: 35pt;
    }

    .sectionHightlightBox > div > *
    {
        margin: 0 auto;
        text-align: center;
        display: block;
        text-align: center; 
    }

    .sectionHightlightBox > div > div
    {
        margin-top:50pt;
    }

    .sectionHightlightBox > div > h1
    {
        margin-top: 10pt;
    }

    .sectionHightlightBox > div > span
    {
        margin-top: 20pt;
    }

    .highlightBoxBody
    {
        opacity: 0;
        transition: all 500ms ease;
    }

    .sectionHightlightBoxHighlighted .highlightBoxBody
    {
        opacity: 1;
        overflow: visible;
    }
</style>