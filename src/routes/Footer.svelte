<script lang="ts">
    import '../css/global.css';

    import NewsletterEntryInput from './NewsletterEntryInput.svelte';

    import footerIcon from '$lib/assets/images/Footer/FooterIcon.png';
    import elfinoIcon from '$lib/assets/images/Footer/elfinoLogo.png';
    
    let { customClass = '' } = $props();

    let year = new Date().getFullYear();
</script>

<div>
    <div class="pageWrapper backgroundColor5">  
        <div class="pageContent">
            <div class="grid grid-cols-1 xl:grid-cols-5 xl:gap-6">
                <div class="col-span-2">
                    <img src={footerIcon} id="footerImage"/>
                    <NewsletterEntryInput></NewsletterEntryInput>
                </div>
                <div class="col-span-3">
                    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
                        <div>
                            <h1 class="fontStyleH6 fontColorPrimary">Unternehmen</h1>
                            <a class="fontStyleFooterLink fontColorLight" href="/">Home</a><br/>
                            <a class="fontStyleFooterLink fontColorLight" href="/ueber-uns">Über uns</a><br/>
                            <a class="fontStyleFooterLink fontColorLight" href="/modelle">Modelle</a><br/>
        
                        </div>
                        <div>
                            <h1 class="fontStyleH6 fontColorPrimary">Rechtliches</h1>
                            <a class="fontStyleFooterLink fontColorLight" href="/impressum">Impressum</a><br/>
                            <a class="fontStyleFooterLink fontColorLight" href="/datenschutz">Datenschutz</a><br/>
                            <a class="fontStyleFooterLink fontColorLight" href="/kontakt">Kontakt</a><br/>
                        </div>
        
                        <div>
                            <h1 class="fontStyleH6 fontColorPrimary">Kontakt</h1>
                            <span class="fontStyleFooterText fontColorLight">Gewerbering 4
                                <br/>
                                76287 Rheinstetten<br/><br/>
                                M: +49 (0)179-773-49-73 <br/>
                                E: f.rittmann@cubiccube.de
                                <br/>
                                <br/>
                                Teil der:
                                <br/>
                                <br/>
                                <img src={elfinoIcon} alt="elfino gruppe" id="elfinoIcon"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>

    <div class="pageWrapper backgroundColor5 copyrightFooter">  
        <div class="pageContent">
            <div class="fontColorLight footerCopyright">
                © {year} elfino family group GmbH & Co. KG. 
            </div>         
        </div>
    </div>
</div>

<style>
h1
{
    margin-bottom: 20px;
    margin-top:50px;
}

#footerImage
{
    width: 220px;
}

.footerCopyright
{
    font-weight: 300;
    font-size: 17px;
}

.fontStyleFooterLink
{
    height: 40px;
    line-height: 40px;
    margin: auto;
    position: relative;
    vertical-align: middle;
    display: inline-block;
}


.fontStyleFooterText,
.fontStyleFooterLink
{
    font-size: 17px;
    font-weight: 300;
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
    

.copyrightFooter
{
    border-top: 3px solid var(--colors-light);
}

.copyrightFooter .pageContent
{
    padding: 20px;
}

#elfinoIcon
{
    display: inline-block;
    padding-right: 10px;
    width: 180px;
}

</style>