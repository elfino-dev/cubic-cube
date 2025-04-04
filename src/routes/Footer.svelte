<script lang="ts">
    import '../css/global.css';

    import NewsletterEntryInput from './NewsletterEntryInput.svelte';

    import footerIcon from '$lib/assets/images/Footer/FooterIcon.png';
    import elfinoIcon from '$lib/assets/images/Footer/elfinoLogo.png';

    import instagramIcon from '$lib/assets/images/Footer/instagramIcon.png';
    import linkedInIcon from '$lib/assets/images/Footer/linkedInIcon.png';
    
    import { onMount } from 'svelte';
	import * as CookieConsent from 'vanilla-cookieconsent';
	import config from '$lib/cookieConsent/cookieconsent-config';
	import 'vanilla-cookieconsent/dist/cookieconsent.css';

	/**
	 * Only run plugin on the client side
	 */
	onMount(() => {
		CookieConsent.run(config);
	});

    let obfs = "f"+"."+"r"+"i"+"t"+"t"+"m"+"a"+"n"+"n"+"@"+"c"+"u"+"b"+"i"+"c"+"c"+"u"+"b"+"e"+"."+"d"+"e";

    let year = new Date().getFullYear();
</script>

<div>
    <div class="pageWrapper backgroundColor5">  
        <div class="pageContent">
            <div class="grid grid-cols-1 xl:grid-cols-5 xl:gap-6">
                <div class="col-span-2">
                    <img src={footerIcon} id="footerImage" alt="footer logo"/>
                    <NewsletterEntryInput></NewsletterEntryInput>
                </div>
                <div class="col-span-3">
                    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
                        <div>
                            <h1 class="fontStyleH6 fontColorPrimary">Unternehmen</h1>
                            <a class="fontStyleFooterLink fontColorLight" href="/">Home</a><br/>
                            <a class="fontStyleFooterLink fontColorLight" href="/ueberUns">Über uns</a><br/>
                            <a class="fontStyleFooterLink fontColorLight" href="/modelle">Modelle</a><br/>
        
                        </div>
                        <div>
                            <h1 class="fontStyleH6 fontColorPrimary">Rechtliches</h1>
                            <a class="fontStyleFooterLink fontColorLight" href="/impressum">Impressum</a><br/>
                            <a class="fontStyleFooterLink fontColorLight" href="/datenschutz">Datenschutz</a><br/>
                            <a class="fontStyleFooterLink fontColorLight" href="/kontakt">Kontakt</a><br/>
                            <button class="fontStyleFooterLink fontColorLight" on:click={CookieConsent.showPreferences}>Cookies</button>
                            
	                        
                        </div>
        
                        <div>
                            <h1 class="fontStyleH6 fontColorPrimary">Kontakt</h1>
                            <span class="fontStyleFooterText fontColorLight">Gewerbering 4
                                <br/>
                                76287 Rheinstetten<br/><br/>
                                M: +49 (0)179-773-49-73 <br/>
                                E: {obfs}
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
            <div class="fontColorLight footer">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="copyrightText">© {year} elfino family group GmbH & Co. KG. </div>
                    <div class="flex space-x-4 socials">
                        <div><a href="https://www.linkedin.com/company/cubiccube-gmbh/" target="_blank"><img alt="linkedin" src="{linkedInIcon}"></a></div>
                        <div><a href="https://www.instagram.com/cubiccube.de/" target="_blank"><img alt="instagram" src="{instagramIcon}"></a></div>
                    </div>
                </div>
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

.footer
{
    font-weight: 300;
    font-size: 17px;
    line-height: 35px !important;
}

@media (width < 48rem) 
{
    .footer .copyrightText,
    .footer .socials
    {
        justify-content: center;
        text-align: center;
    }

    .footer .socials
    {
        margin-top: 10px;
    }

    .footer .socials img
    {
        width: 45px;
        height: 45px;
    }
}

@media (width >= 48rem) 
{
    .footer .socials
    {
        justify-content: flex-end;
    }

    .footer
    {
        font-weight: 300;
        font-size: 17px;
        line-height: 35px !important;
    }

    .footer .socials img
    {
        width: 35px;
        height: 35px;
    }
}





.fontStyleFooterLink
{
    cursor: pointer;
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