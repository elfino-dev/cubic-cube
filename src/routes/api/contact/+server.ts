import { json } from '@sveltejs/kit';
const nodemailer = await import('nodemailer');
import { config } from 'dotenv';
import validator from 'validator';
import sanitizeHtml from 'sanitize-html';
config(); // Load .env variables

export async function POST({ request } : any) {
    try {
        const { email } = await request.json();
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
        return json({ error: 'Fehler beim senden.' }, { status: 500 });
    }
}
