<script>
    import Button from './Button.svelte';
    import Arrow from "$lib/assets/images/Common/Arrow.svelte";

    import { onMount } from 'svelte';
    let email = '';
    let message = '';
    let loading = false;

    async function sendEmail() {
        message = '';
        if (!email.match(/^[^s@]+@[^s@]+\.[^s@]+$/)) {
            message = 'Bitte eine gültige E-Mail angeben';
            return;
        }

        loading = true;
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            const data = await res.json();
            if (res.ok) {
                message = 'Versandt. Wir melden uns in Kürze!';
                email = '';
            } else {
                message = `${data.error}`;
            }
        } catch (err) {
            message = 'Fehler - bitte später erneut probieren!';
        } finally {
            loading = false;
        }
    }
</script>

<div class="wrapper">
    <h1 class="fontStyleH6 fontColorPrimary" style="padding-bottom:20px;">Jetzt beraten lassen</h1>
    <div>
        <form on:submit|preventDefault={sendEmail} class="form">
            <input placeholder="E-Mail" id="email" type="email" bind:value={email} required /> 
            <button type="submit">
                <Arrow></Arrow>
            </button>

            {#if message}
                <p class="message">{message}</p>
            {/if}
        </form>
    </div>
</div>
<style>

button
{
    aspect-ratio: 1 / 1; 
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

input
{
    margin: 0;
    border: 0;
    background-color: var(--colors-color2);
    display: inline-block;
    color: var(--colors-light);
    font-size: 17px;
}

@media (max-width: 1279px) 
{
    input
    {
        width: calc(100% - 50px);
    }
}   

@media (min-width: 1280px) 
{
    .wrapper
    {
        margin-top:130px;
    }

    input
    {
        width: 270px;
    }
}   
</style>