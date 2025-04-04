import { json } from '@sveltejs/kit';
const nodemailer = await import('nodemailer');
import { config } from 'dotenv';
import validator from 'validator';
import sanitizeHtml from 'sanitize-html';
config(); // Load .env variables

export async function POST({ request } : any) {
    try {
        let secretKey = process.env.RECAPTCHA_SECRET_KEY;

        const { email, name, company, phone, subject, msg, token } = await request.json();
        let errors: Record<string, string> = {};
        
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
        if(data.score < parseFloat(process.env.RECAPTCHA_SCORE_THRESHOLD || "0.5"))
        {
            return json({ error: 'Recaptcha fehlgeschlagen. Bitte erneut probieren.' }, { status: 400 });
        }

        if (!validator.isEmail(email))
            errors.email = 'Bitte eine gültige E-Mail angeben';

        if (/[\r\n]/.test(email))
            errors.email = 'Bitte eine gültige E-Mail angeben';

        if (/[\r\n]/.test(name))
            errors.message = 'Bitte einen gültigen Namen angeben';

        const sanitizedEmail = sanitizeHtml(email, { allowedTags: [], allowedAttributes: {} });
        
        const sanitizedName = sanitizeHtml(name, { allowedTags: [], allowedAttributes: {} });
        if(sanitizedName.length == 0)
            errors.name = 'Bitte einen Namen angeben';
        if(sanitizedName.length > 1000)
            errors.name = 'Der Name ist zu lang (maximal 1.000 Zeichen)';

        const sanitizedCompany = sanitizeHtml(company, { allowedTags: [], allowedAttributes: {} });
        if(sanitizedCompany.length == 0)
            errors.company = 'Bitte einen Firmennamen angeben';
        if(sanitizedCompany.length > 255)
            errors.company = 'Der Firmenname ist zu lang (maximal 255 Zeichen)';

        const sanitizedSubject = sanitizeHtml(subject, { allowedTags: [], allowedAttributes: {} });
        if(sanitizedSubject.length == 0)
            errors.subject = 'Bitte einen Betreff angeben.';
        if(sanitizedSubject.length > 1000)
            errors.subject = 'Der Betreff ist zu lang (maximal 1.000 Zeichen)';
        
        const sanitizedPhone = sanitizeHtml(phone, { allowedTags: [], allowedAttributes: {} });
        if(sanitizedPhone.length == 0)
            errors.phone = 'Bitte eine Telefonnummer angeben.';
        if(sanitizedPhone.length > 255)
            errors.phone = 'Die Telefonnummer ist zu lang (maximal 255 Zeichen)';

        const sanitizedMessage = sanitizeHtml(msg, { allowedTags: [], allowedAttributes: {} });
        if(sanitizedMessage.length == 0)
            errors.message = 'Bitte eine Nachricht angeben.';
        if(sanitizedMessage.length > 50000)
            errors.message = 'Die Nachricht ist zu lang (maximal 50.000 Zeichen)';
        
        if (Object.keys(errors).length > 0) 
            return json({ errors }, { status: 400 });

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
            subject: 'Cubic-Cube - neue Anfrage per Kontaktformular',
            text: `Jemand möchte in Kontakt treten: 
            
            \r\n\r\n Betreff: ${sanitizedSubject} 
            \r\n\ Name: ${sanitizedName}  
            \r\n\ Firma: ${sanitizedCompany}
            \r\n\ Telefon: ${sanitizedPhone}
            \r\n\ E-Mail: ${sanitizedEmail}

            \r\n\ Nachricht: \r\n\r\n
            
            ${sanitizedMessage}`,
        });

        return json({ success: true });
    } catch (error) {
        console.error(error);
        return json({ error: 'Fehler beim Senden.' }, { status: 500 });
    }
}
