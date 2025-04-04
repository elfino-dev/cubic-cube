<script>
    import { onMount } from "svelte";
    import { recaptchaToken } from "$lib/stores/recaptchaStore";

    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

    function loadRecaptcha() {
        console.log(`Site key is ${siteKey}`)

        return new Promise((resolve) => {
            if (typeof window !== "undefined" && !window.grecaptcha) {
                const script = document.createElement("script");
                script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
                script.async = true;
                script.onload = resolve;
                document.head.appendChild(script);
            } else {
                resolve();
            }
        });
    }

    async function generateToken() {
        await loadRecaptcha();
        if (window.grecaptcha) {
            window.grecaptcha.ready(() => {
                window.grecaptcha.execute(siteKey, { action: "submit" }).then(t => {
                    recaptchaToken.set(t);
                });
            });
        }
    }

    onMount(() => {
        generateToken();
    });
</script>