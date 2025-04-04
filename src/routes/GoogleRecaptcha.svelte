<script>
    import { onMount } from "svelte";

    let token = "";

    function loadRecaptcha() {
        return new Promise((resolve) => {
            if (typeof window !== "undefined" && !window.grecaptcha) {
                const script = document.createElement("script");
                script.src = "https://www.google.com/recaptcha/api.js?render=your-site-key";
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
                window.grecaptcha.execute("your-site-key", { action: "submit" }).then(t => {
                    token = t;
                });
            });
        }
    }

    onMount(() => {
        generateToken();
    });

    async function submitForm() {
        if (!token) {
            alert("reCAPTCHA not loaded yet. Please try again.");
            return;
        }

        const response = await fetch("/api/recaptcha", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
        });

        const data = await response.json();
        if (data.success && data.score > 0.5) {
            alert("Success! Form submitted.");
        } else {
            alert("reCAPTCHA verification failed. Please try again.");
        }
    }
</script>