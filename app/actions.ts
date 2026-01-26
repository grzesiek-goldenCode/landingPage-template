"use server";
import { z, ZodError } from "zod";
import { Resend } from "resend";
import { contactEmail } from "@/content/pl";

const schema = z.object({
  name: z.string().min(2, { message: "Imię musi mieć co najmniej 2 znaki" }),
  email: z.email("Wpisz poprawny adres email"),
  message: z
    .string({ message: "Wiadomość musi mieć min. 20 znaków" })
    .min(20, { message: "Wiadomość musi mieć min. 20 znaków" }),
  recaptchaToken: z.string(),
});

async function verifyRecaptcha(token: string): Promise<boolean> {
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    },
  );
  const data = await response.json();
  return data.success && data.score >= 0.5;
}

type ContactState = {
  success?: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string;
} | null;

const resend = new Resend(process.env.RESEND_API_KEY);

// formAction dla wysyłania wiadomości z formularza. Walidacja danych za pomocą zod schema, zod zwraca też błedy w formularzu.
// wiadomości wysyłane za pomocą resend - darmowy plan

export async function sendMessage(
  prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const validatedFormData = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    recaptchaToken: formData.get("recaptchaToken"),
  });

  if (!validatedFormData.success) {
    const errors: {
      name?: string[];
      email?: string[];
      message?: string[];
    } = {};

    validatedFormData.error.issues.forEach((issue) => {
      const field = issue.path[0] as "name" | "email" | "message";
      if (!errors[field]) {
        errors[field] = [];
      }
      errors[field]!.push(issue.message);
    });
    return { errors };
  }

  const { name, email, message, recaptchaToken } = validatedFormData.data;
  const isHuman = await verifyRecaptcha(recaptchaToken);
  if (!isHuman) {
    return {
      message: "Weryfikacja captcha nie powiodła się. Spróbuj ponownie.",
    };
  }

  try {
    await resend.emails.send({
      from: "Kontakt <onboarding@resend.dev>",
      to: `${contactEmail}`,
      replyTo: email,
      subject: `Nowa wiadomość od: ${name}`,
      html: `<h2>Nowa wiadomość z formularza</h2>
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${message}</p>`,
    });

    return { success: true };
  } catch (error) {
    console.error("Email error", error);
    return { message: "Nie udało się wysłać wiadomości" };
  }
}
