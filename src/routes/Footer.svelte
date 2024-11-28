<script lang="ts">
    import '../css/global.css';

    import Button from './Button.svelte';

    import Icon from '$lib/assets/images/Footer/FoooterIcon.png';
    
    let { customClass = '' } = $props();
</script>

<div class="pageWrapper backgroundColor5">  
    <div class="pageContent">
                  
        <div class="grid grid-cols-5 gap-6 carConfigurationGrid">
            <img src={Icon} />
            <div></div>
            <div>
                <h1 class="fontStyleH6 fontColorPrimary">Unternehmen</h1>
                <a class="fontStyleFooterLink fontColorLight" href="/">Home</a><br/>
                <a class="fontStyleFooterLink fontColorLight" href="/Ueber-uns">Über uns</a><br/>
                <a class="fontStyleFooterLink fontColorLight" href="/Produkt">Produkt</a><br/>
                <a class="fontStyleFooterLink fontColorLight" href="/Team">Team</a><br/>
                <a class="fontStyleFooterLink fontColorLight" href="/elfino">elfino-Gruppe</a>

            </div>
            <div>
                <h1 class="fontStyleH6 fontColorPrimary">Rechtliches</h1>
                <a class="fontStyleFooterLink fontColorLight" href="/">Impressum</a><br/>
                <a class="fontStyleFooterLink fontColorLight" href="/Datenschutz">Datenschutz</a><br/>
                <a class="fontStyleFooterLink fontColorLight" href="/Kontakt">Kontakt</a><br/>
            </div>

            <div>
                <h1 class="fontStyleH6 fontColorPrimary">Kontakt</h1>
                <span class="fontStyleFooterText fontColorLight">Gewerbering 4
                    <br/>
                    76287 Rheinstetten<br/><br/>
                    M: +49 (0)179-773-49-73 <br/>
                    E: f.rittmann@cubiccube.de
                </span>
            </div>
        </div>         
    </div>
</div>

<style>
h1
{
    margin-bottom: 30px;
}

.fontStyleFooterLink
{
    height: 30px;
    line-height: 30px;
    position: relative;
    vertical-align: middle;
    display: inline-block;
}


.fontStyleFooterText,
.fontStyleFooterLink
{
    font-size: 17px;
    font-weight: 400;
}

.fontStyleFooterLink:before,
.fontStyleFooterLink:after
{
    content: '';
    display: block;
    position: absolute;
    width: 0%;
    border-top: 3px solid var(--colors-primary);
    transition: all 0.2s ease-in-out;
}

.fontStyleFooterLink:before
{
    left: 0%;
    top: 0;
}

.fontStyleFooterLink:after
{
    left: 100%;
    bottom: 0;
}

.fontStyleFooterLink:hover:before,
.fontStyleFooterLink:hover:after
{
    width: 100%;
}

.fontStyleFooterLink:hover:after
{
    left: 0%;
}
    
</style>