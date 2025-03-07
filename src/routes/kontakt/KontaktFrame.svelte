<script lang="ts">
    import '../../css/global.css';
    import Button from './../Button.svelte';

    import contactMail from '$lib/assets/images/kontakt/icon_mail_orange.svg';
    import contactMap from '$lib/assets/images/kontakt/icon_maps_orange.svg';
    import contactPhone from '$lib/assets/images/kontakt/icon_tel_orange.svg';

    let name = '', email = '', subject = '', msg = '', phone = '', company = '';
    let success = false, loading = false;
    let errors: Record<string, string> = {};

    async function sendEmail() {
        loading = true;
        success = false;
        errors = {};

        try {
            const res = await fetch('/api/contactForm', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, name, subject, phone, company, msg })
            });

            const data = await res.json();
            if (!res.ok) {
                if (data.errors) {
                    errors = data.errors;
                } else {
                    errors.general = data.error || 'Something went wrong.';
                }
                return;
            }

            success = true;
            name = '';
            email = ''; 
            subject = '';
            msg = ''; 
            phone = ''; 
            company = '';
        } catch (err) {
            errors.general = "Netzwerkfehler - bitte erneut probieren."
        } finally {
            loading = false;
        }
    }
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
                        <div class="flex flex-row justify-center items-center"><img src={contactMap} alt="map"  style="height: 70px;"/></div>
                        <div class="col-span-4 flex items-center">
                            CubicCube GmbH<br/>
                            Gewerbering 4<br/>
                            76287 Rheinstetten
                        </div>
                    </div>

                    <div class="grid grid-cols-5 gap-[20px] contactElements fontColorLight fontStyleP ">
                        <div class="flex flex-row justify-center items-center"><img src={contactMail} alt="mail" style="height: 40px;"/></div>
                        <div class="col-span-4 flex items-center">
                            f.rittmann@cubiccube.de
                        </div>
                    </div>

                    <div class="grid grid-cols-5 gap-[20px] contactElements fontColorLight fontStyleP ">
                        <div class="flex flex-row justify-center items-center"><img src={contactPhone} alt="phone" style="height: 55px;"/></div>
                        <div class="col-span-4 flex items-center">
                            +49 (0)179-773-49-73
                        </div>
                    </div>
                </div>
                
                
            </div>
            <div class="contactForm fontColorLight fontStyleP xl:col-span-3" >
                <h1 class=fontStyleH3>Kontakt</h1>
                <div>Schreiben Sie uns eine Nachricht! Wir setzen uns gerne mit Ihnen in Verbindung.</div>

                <form on:submit|preventDefault={sendEmail} class="contact-form">
                    <div class="grid grid-cols-1 xl:grid-cols-2 gap-[20px]">
                        <div class="contentFrameElement">
                            <label for="name" class="fontStyleH7">Name</label>
                            <input type="text" id="name" bind:value={name} class="block fontColorC2 {errors.name ? 'error' : ''}" placeholder="Vor- und Nachname" required />
                            {#if errors.name} <p class="error fontColorC3">{errors.name}</p> {/if}
                        </div>

                        <div class="contentFrameElement">
                            <label for="company" class="fontStyleH7">Unternehmen</label>
                            <input type="text" id="company" bind:value={company} class="block fontColorC2 {errors.company ? 'error' : ''}" placeholder="Unternehmen" required />
                            {#if errors.company} <p class="error fontColorC3">{errors.company}</p> {/if}
                        </div>

                        <div class="contentFrameElement">
                            <label for="phone" class="fontStyleH7">Telefonnummer</label>
                            <input type="text" id="phone" bind:value={phone} class="block fontColorC2 {errors.phone ? 'error' : ''}" placeholder="Telefonnummer" required />
                            {#if errors.phone} <p class="error fontColorC3">{errors.phone}</p> {/if}
                        </div>

                        <div class="contentFrameElement">
                            <label for="email" class="fontStyleH7">E-Mail</label>
                            <input type="text" id="email" bind:value={email} class="block fontColorC2 {errors.email ? 'error' : ''}" placeholder="E-Mail" required />
                            {#if errors.email} <p class="error fontColorC3">{errors.email}</p> {/if}
                        </div>

                        <div class="contentFrameElement xl:col-span-2">
                            <label for="subject" class="fontStyleH7">Betreff</label>
                            <input type="text" id="subject" bind:value={subject} class="block fontColorC2 {errors.subject ? 'error' : ''}" placeholder="Betreff" required />
                            {#if errors.subject} <p class="error fontColorC3">{errors.subject}</p> {/if}
                        </div>


                        <div class="contentFrameElement xl:col-span-2">
                            <label for="msg" class="fontStyleH7">Nachricht</label>
                            <textarea id="msg" bind:value={msg}  class="block fontColorC2 {errors.message ? 'error' : ''}" placeholder="Nachricht" required></textarea>
                            {#if errors.message} <p class="error fontColorC3">{errors.message}</p> {/if}
                        </div>

                        <div class="buttonWrapper">
                            <button type="submit" disabled={loading}>
                                {#if loading} lädt... {/if}
                                {#if !loading} Senden {/if}
                            </button>
                        </div>

                        {#if errors.general}
                            <p class="error">{errors.general}</p>
                        {/if}
                        {#if success}
                            <p class="success">Nachricht verschickt!</p>
                        {/if}
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>


<style>

    input.error,
    textarea.error
    {
        margin: -3px;
        border: 3px solid var(--colors-color3);
    }

    p.error
    {
        color: var(--colors-color3);
    }

    .buttonWrapper button
    {
        display: inline-block;
        padding:10px; 
        background-color:var(--colors-primary);
        color:var(--colors-color2); 
        text-align: center;
        height: 40px;
        line-height: 20px;
        cursor: pointer;
        font-size: 18px;
        font-weight: 400;
    }

    input, textarea
    {
        font-weight: 600;
    }

    input::placeholder,
    textarea::placeholder
    {
        font-weight: 300;
    }

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