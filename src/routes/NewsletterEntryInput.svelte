<script>
    import Arrow from "$lib/assets/images/Common/Arrow.svelte";
    import { recaptchaToken } from "$lib/stores/recaptchaStore";

    let token;
    $: recaptchaToken.subscribe(value => token = value);

    let email = '';
    let successMessage = '';
    let errorMessage = '';
    let loading = false;

    async function sendEmail() {
        successMessage = '';
        errorMessage = '';
        loading = true;

        if (!token) {
            errorMessage = "reCAPTCHA lädt noch... Bitte erneut probieren!";
            return;
        }

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, token })
            });

            await new Promise((resolve) => setTimeout(resolve, 1000));

            const data = await res.json();
            if (res.ok) {
                successMessage = 'Versandt. Wir melden uns in Kürze!';
                email = '';
            } else {
                errorMessage = `${data.error}`;
            }
        } catch (err) {
            errorMessage = 'Fehler - bitte später erneut probieren!';
        } finally {
            loading = false;
        }
    }
</script>

<div class="wrapper">
    <h1 class="fontStyleH6 fontColorPrimary" style="padding-bottom:20px; font-weight: bold;">Jetzt beraten lassen</h1>
    <div>
        <form on:submit|preventDefault={sendEmail} class="form">
            <input placeholder="E-Mail" id="email" type="email" bind:value={email} required /> 
            <div class="card aspect-square transform-gpu {loading ? 'loading': ''}">
                <div class="content transform-gpu">
                    <button type="submit" class="front"  disabled={loading}>
                        <div class="flex flex-column justify-center items-center">
                            <Arrow/>
                        </div>
                    </button>
                    <div class="back">
                        <div class="flex flex-column justify-center items-center">
                            <div id="preload">
                                <div class="cube-loader">
                                    <div class="cube1 cube"></div>
                                    <div class="cube2 cube"></div>
                                    <div class="cube4 cube"></div>
                                    <div class="cube3 cube"></div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>	
            </div>

            {#if successMessage}
                <p class="message fontStyleP fontColorPrimary">{successMessage}</p> 
            {/if}
            {#if errorMessage}
                <p class="message fontStyleP fontColorC3">{errorMessage}</p> 
            {/if}
        </form>
    </div>
</div>
<style>  

    .message
    {
        font-weight:bold;
    }

    .cube-loader {
        top: 50%;
        left: 50%;
        margin-left: -20px;
        margin-top: -20px;
        width: 40px;
        height: 40px;
        position: absolute;
    }

    .cube-loader .cube {
        float: left;
        width: 50%;
        height: 50%;
        position: relative;
    }

    .cube-loader .cube2 {
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
    }


    .cube-loader .cube4 {
        -webkit-transform: rotateZ(270deg);
        transform: rotateZ(270deg);
    }
    .cube-loader .cube3 {
        -webkit-transform: rotateZ(180deg);
        transform: rotateZ(180deg);
    }

    .cube-loader .cube:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -webkit-animation: foldCubeAngle 2.4s infinite linear both;
        animation: foldCubeAngle 2.4s infinite linear both;
        -webkit-transform-origin: 100% 100%;
        -ms-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        background: var(--colors-primary);
    }

    .cube-loader .cube2:before {
        -webkit-animation-delay: .3s;
        animation-delay: .3s;
    }

    .cube-loader .cube4:before {
        -webkit-animation-delay: .9s;
        animation-delay: .9s;
    }

    .cube-loader .cube3:before {
        -webkit-animation-delay: .6s;
        animation-delay: .6s;
    }

    @keyframes foldCubeAngle{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-webkit-transform:perspective(140px) rotateX(0);transform:perspective(140px) rotateX(0);opacity:1}100%,90%{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}

    .card {
        display: inline-block;
        position: relative;
        width: 40px;
        height: 40px;
        margin-left: 10px;
    }

    .content {
        position: absolute;
        width: 100%;
        height: 100%;
        transition: transform 0.5s;
        transform-style: preserve-3d;
    }

    .card.loading .content {
        transform: rotateY( 180deg );
    }

    .front,
    .back {
        position: absolute;
        height: 100%;
        width: 100%;
        background: var(--colors-primary);
        color: var(--colors-color2);
        text-align: center;
        backface-visibility: hidden;
    }

    .front > div,
    .back > div
    {
        position: relative;
        flex-grow: 1;
        height: 100%;
        flex-grow: 1;
        flex-direction: column;
    }

    .back {
        background: var(--colors-color2);
        color: white;
        transform: rotateY( 180deg );
        font-size: 20px;
    }

    input
    {
        vertical-align: top;
        margin: 0;
        border: 0;
        background-color: var(--colors-color2);
        display: inline-block;
        color: var(--colors-light);
        font-size: 17px;
        max-width: 400px;
    }

    @media (max-width: 1279px) 
    {
        .wrapper
        {
            margin-top:40px;
        }

        input
        {
            width: calc(100% - 60px);
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