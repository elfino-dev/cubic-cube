import { json } from '@sveltejs/kit';
const nodemailer = await import('nodemailer');
import { config } from 'dotenv';
import validator from 'validator';
import sanitizeHtml from 'sanitize-html';
config(); // Load .env variables

export async function POST({ request } : any) {
    try {

        let secretKey = process.env.RECAPTCHA_SECRET_KEY;

        const { email, token } = await request.json();

        const formData = new URLSearchParams();
        formData.append('secret', secretKey);
        formData.append('response', token);

        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formData,
        });
    
        const data = await response.json();
        console.log(data);
        console.log("Recaptcha score is: " + data.score + ", threshold is '" + process.env.RECAPTCHA_SCORE_THRESHOLD + "'");
        if (data.success && data.score !== undefined && data.score < parseFloat(process.env.RECAPTCHA_SCORE_THRESHOLD || "0.5"))
        {
            return json({ error: 'Recaptcha fehlgeschlagen. Bitte erneut probieren.' }, { status: 400 });
        }

        if (!validator.isEmail(email)) {
            return json({ error: 'Bitte eine gültige E-Mail angeben' }, { status: 400 });
        }

        // Prevent email header injection
        if (/[\r\n]/.test(email)) {
            return json({ error: 'Bitte eine gültige E-Mail angeben' }, { status: 400 });
        }

        const sanitizedEmail = sanitizeHtml(email, { allowedTags: [], allowedAttributes: {} });

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: process.env.SMTP_TO,
            subject: 'Cubic-Cube - neue Anfrage via "jetzt beraten" ',
            text: `Jemand möchte in Kontakt treten: ${sanitizedEmail}`,
        });

        return json({ success: true });
    } catch (error) {
        console.error(error);
        return json({ error: 'Fehler beim Senden.' }, { status: 500 });
    }
}
