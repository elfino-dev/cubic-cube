<script lang="ts">
    import '../css/global.css';
	import Button from './Button.svelte';

    let { content, buttonLink = null, buttonContext = null, subtext = null } = $props();
</script>

<div class="pageWrapper">
    <div class="pageContent">
        <div class="grid cta">
            <span class="fontStyleH2 fontColorLight" style="vertical-align: center;">{content}</span>
            {#if buttonContext != null && buttonLink != null}
                <Button>{buttonContext}</Button>
            {/if}

            {#if subtext != null}
                <div class="fontStyleH6 fontColorPrimary" style="padding-top:40px;">
                    {subtext}
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .pageWrapper{
        background: url("$lib/assets/images/Cta/BackgroundSmear.png") no-repeat;
        background-size: 100% 101%;
    }

    .cta
    {
        padding: 50px 0;
        text-align: center;
        padding: 50px;
    }
</style>