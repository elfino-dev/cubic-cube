<script>
	import { page } from '$app/stores';
</script>

<div class="errorPage">
    <h1 class="errorCode fontColorLight">{$page.status}</h1>
    <div class="fontStyleH4 fontColorC3">Page not found</div>
    <div class="fontStyleP fontColorLight">
        Sieht aus, als wären Sie in eine digitale Sackgasse geraten. <br/>
        Aber keine Angst! In unserer CubicCube-Welt gibt es noch viel zu entdecken.
    </div>
</div>


<style>
    .errorPage
    {
        text-align: center;
    }

    .errorCode
    {
        font-weight: 700;
        font-size: 200px;
        text-align: center;
        line-height: 240px;
        margin-top:20vh;
    }
</style>