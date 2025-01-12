<script lang="ts">
    import '../css/global.css';
    import HighlightBox from './SectionHighlightBox.svelte';

    import effizient from '$lib/assets/images/effizient.svelte';
    import modular from '$lib/assets/images/modular.svelte';
    import langlebig from '$lib/assets/images/langlebig.svelte';
    import nachhaltig from '$lib/assets/images/nachhaltig.svelte';
    
    let { customClass = '' } = $props();
</script>

<div class="pageWrapper">
    <div class="pageContent">
        <div class="sectionHighlightBox grid grid-cols-4 gap-[20px]">
            <HighlightBox icon="{effizient}" body="Unsere CubicCubes sind schnell geliefert und gut durchdacht" title="effizient"></HighlightBox>
            <HighlightBox icon="{modular}" body="Flexible Module ermöglichen einen individuellen Kofferaufbau nach Ihren Bedürfnissen und Anforderungen" title="modular"></HighlightBox>
            <HighlightBox icon="{langlebig}" body="Unsere aus Aluminium gefertigten Kofferaufbauten stehen für mehr Qualität und eine längere Haltbarkeit" title="langlebig"></HighlightBox>
            <HighlightBox icon="{nachhaltig}" body="Der Umwelt zuliebe sind unsere Koffer langlebig und austauschbar" title="nachhaltig"></HighlightBox>
        </div>
    </div>
</div>

<style>

    .sectionHighlightBox
    {
        margin-bottom: 50px;
    }

    div.pageWrapper
    {
        overflow: visible !important;
    }

    .pageContent
    {
        padding: 0;
    }
</style>