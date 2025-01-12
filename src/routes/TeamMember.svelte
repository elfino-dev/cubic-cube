<script lang="ts">
    let { name, teamMemberImage, position } = $props();
</script>

<div class="teamMember">
    <div class="spacer"></div>
    <div class="backgroundBar">
        <div class="teamImage" style="background-image: url({teamMemberImage})"></div>
    </div>
    <div class="teamMemberName fontStyleH4 fontColorLight">
        { name }
    </div>

    <div class="teamMemberPosition fontStyleP fontColorLight">
        { position }
    </div>
</div>

<style>
    .teamMember
    {
        min-height: 550px;
    }

    .spacer
    {
        height: 250px;
    }

    .backgroundBar
    {
        border-radius: 35px;
        background-color: var(--colors-color5);
        width: 100%;
        height: 200px;
        position: relative;
        transition: all 0.2s ease-in-out;

        
        align-items: center;
        justify-content: center;
        display: flex;
    }

    .backgroundBar .teamImage
    {
        margin: 0 auto;
        aspect-ratio: 1 / 1;
        position: absolute;
        bottom: 0;
        left: auto;
        right: auto;
        max-width: 450px; 
        width: 100%;
        background-position: 50% 101%;
        background-size: 90%;
        background-repeat: no-repeat;
        transition: all 0.2s ease-in-out;
    }

    .teamMember:hover .teamImage
    {
        background-size: 100%;
    }

    .teamMember:hover .teamMemberName,
    .teamMember:hover .teamMemberPosition
    {
        color: var(--colors-color3);
    }

    .teamMember:hover .backgroundBar
    {
        background-color: var(--colors-color3);
    }

    .teamMemberName,
    .teamMemberPosition
    {
        text-align: center;
        padding-top: 12px;
        transition:  all 0.2s ease-in-out;
    }
</style>