<script lang="ts">
    import '../css/global.css';
    import teaser from '$lib/assets/images/TeaserImage.png';

    let { title, body, icon } = $props();
</script>

<div class="sectionHightlightBox">
    <img alt="{title}" src={icon}/>
    <h1>{title}</h1>
    <span>{body}</span>
</div>

<style>

    .sectionHightlightBox > *
    {
        margin: 0 auto;
        text-align: center;
        display: block; 
        vertical-align: middle; 
        text-align: center; 
    }

    .sectionHightlightBox img
    {

    }

    .sectionHightlightBox h1
    {
        font-size: 24px;
        color: var(--colors-color4);
    }

    .sectionHightlightBox span
    {
        font-size: 17x;
        line-height: 24px;
        color: var(--colors-color4);
    }
</style>