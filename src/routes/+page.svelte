<script>
    import Header from './SectionHeader.svelte';
    import Teaser from './SectionTeaser.svelte';
    import Highlight from './SectionHighlight.svelte';
    import '../css/global.css';
</script>

<div class="pageWrapper">
    <div class="pageContent">
        <Header></Header>
        <Teaser></Teaser>
        <Highlight></Highlight>
    </div>
</div>

<style>
    .pageWrapper {
        display: flex;             /* Enable Flexbox */
        justify-content: center;   /* Center content horizontally */
        min-height: 100vh;         /* Ensure full viewport height */
        box-sizing: border-box;    /* Include padding in width calculation */
        background-color: var(--colors-color2);
    }

    /* Actual content box */
    .pageContent {
        max-width: 1400px;         /* Limit content width */
        width: 100%;               /* Allow the content to shrink on smaller screens */
    }
</style>