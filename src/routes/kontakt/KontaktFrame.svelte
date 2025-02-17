<script lang="ts">
    import '../../css/global.css';
    import Button from './../Button.svelte';

    import contactMail from '$lib/assets/images/kontakt/icon_mail_orange.svg';
    import contactMap from '$lib/assets/images/kontakt/icon_maps_orange.svg';
    import contactPhone from '$lib/assets/images/kontakt/icon_tel_orange.svg';
</script>

<div class="pageWrapper">
    <div class="pageContent">
        <div class="grid grid-cols-1 xl:grid-cols-5 gap-[40px]">
            <div class="contactText xl:col-span-2">
                <p class="fontStyleH6 fontColorC3 smallHeadline">Entdecken Sie CubicCube</p>
                <p class="fontStyleH3 fontColorLight largeHeadline">Lassen Sie sich beraten!</p>
            
                <div class="fontColorLight description fontStyleP ">
                    Gemeinsam gestalten wir Ihren Laderaum nach Ihren Anforderungen. Rufen Sie uns heute noch an. <br/><br/>
                    Sie haben Fragen oder wissen nicht, ob unsere CubicCubes für Ihren Einsatzzweck geeignet sind? Darauf sind wir spezialisiert. Schließlich sind wir mit dem Ziel gestartet, innovative Aufbauten für verschiedene Fahrzeugmodelle zu entwickeln. <br/><br/>
                    Kommen Sie auf uns zu, denn Innovationen sind unsere Stärke. Gerne beantworten wir ausführlich alle offenen Fragen.
                </div>
                <div>
                    <div class="grid grid-cols-5 gap-[20px] contactElements fontColorLight fontStyleP ">
                        <div style="background-image: url({contactMap}); background-repeat:no-repeat; background-position: 50% 50%; margin: 10px;"></div>
                        <div class="col-span-4 flex items-center">
                            CubicCube GmbH<br/>
                            Gewerbering 4<br/>
                            76287 Rheinstetten
                        </div>
                    </div>

                    <div class="grid grid-cols-5 gap-[20px] contactElements fontColorLight fontStyleP ">
                        <div style="background-image: url({contactMail}); background-repeat:no-repeat; background-position: 50% 50%; margin: 10px; "></div>
                        <div class="col-span-4 flex items-center">
                            f.rittmann@cubiccube.de
                        </div>
                    </div>

                    <div class="grid grid-cols-5 gap-[20px] contactElements fontColorLight fontStyleP ">
                        <div style="background-image: url({contactPhone}); background-repeat:no-repeat; background-position: 50% 50%; margin: 5px;"></div>
                        <div class="col-span-4 flex items-center">
                            +49 (0)179-773-49-73
                        </div>
                    </div>
                </div>
                
                
            </div>
            <div class="contactForm fontColorLight fontStyleP xl:col-span-3" >
                <h1 class=fontStyleH3>Kontakt</h1>
                <div>Schreiben Sie uns eine Nachricht! Wir setzen uns gerne mit Ihnen in Verbindung.</div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-[20px]">
                    <div class="contentFrameElement">
                        <label for="name" class="fontStyleH7">Name</label>
                        <input type="text" id="name" class="block" placeholder="Vor- und Nachname" required />
                    </div>

                    <div class="contentFrameElement">
                        <label for="company" class="fontStyleH7">Unternehmen</label>
                        <input type="text" id="company" class="block" placeholder="Unternehmen" required />
                    </div>

                    <div class="contentFrameElement">
                        <label for="phone" class="fontStyleH7">Telefonnummer</label>
                        <input type="text" id="phone" class="block" placeholder="Telefonnummer" required />
                    </div>

                    <div class="contentFrameElement">
                        <label for="email" class="fontStyleH7">E-Mail</label>
                        <input type="text" id="email" class="block" placeholder="E-Mail" required />
                    </div>

                    <div class="contentFrameElement xl:col-span-2">
                        <label for="subject" class="fontStyleH7">Betreff</label>
                        <input type="text" id="subject" class="block" placeholder="Betreff" required />
                    </div>


                    <div class="contentFrameElement xl:col-span-2">
                        <label for="msg" class="fontStyleH7">Nachricht</label>
                        <textarea id="msg" class="block" placeholder="Nachricht" required></textarea>
                    </div>

                    <div class="buttonWrapper">
                        <Button>Senden</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<style>

    .contactText
    {
        margin-top:20px;
    }

    .contactText .description
    {
        margin: 30px 0;
    }

    .contactForm
    {
        background-color: var(--colors-color5);
        border-radius: 35px;
        height: 100%;
        width: 100%;
        padding: 50px;
    }

    .contactForm > * 
    {
        margin-bottom: 10px;
    }

    .contentFrameElement input,
    .contentFrameElement textarea
    {
        width: 100%;
    }

    .contentFrameElement textarea
    {
        height: 150px;
    }

    .contactElements:not(:first-child)
    {
        border-top: 3px solid #B0AFAF1A;
    }

    .contactElements
    {  
        padding: 20px;
    }

    .contactElements .col-span-4
    {        
        min-height: 70px;
    }
</style>