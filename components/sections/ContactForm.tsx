"use client";
import { sendMessage } from "@/app/actions";
import { useFormStatus } from "react-dom";
import { useActionState, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import FormField from "@/components/FormField";

export default function ContactForm() {
  const [state, formAction] = useActionState(sendMessage, null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const { pending } = useFormStatus();

  const handleSubmit = useCallback(
    async (formData: FormData) => {
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }

      const token = await executeRecaptcha("contact_form");

      formData.append("recaptchaToken", token);
      return formAction(formData);
    },
    [executeRecaptcha, formAction],
  );

  return (
    <form
      action={handleSubmit}
      className="flex flex-col justify-center items-center w-full  mx-auto mt-10 mb-20 px-40"
    >
      <FormField
        name="name"
        type="text"
        label="IMIĘ I NAZWISKO"
        placeholder="Jan Kowalski"
        error={state?.errors?.name?.[0]}
        maxLength={30}
        required
      />
      <div className="flex gap-5 w-full">
        <FormField
          name="phone"
          type="tel"
          label="NUMER TELEFONU"
          placeholder="Numer telefonu"
          error={state?.errors?.name?.[0]}
          maxLength={30}
          required
        />
        <FormField
          name="email"
          type="text"
          label="adres email"
          placeholder="Twój adres email"
          error={state?.errors?.email?.[0]}
          maxLength={100}
          required
        />
      </div>
      <FormField
        name="text"
        type="textarea"
        label="twoja wiadomość"
        placeholder="Podaj szczegóły do wyceny - metraż, zakres prac, rodzaj płytek"
        error={state?.errors?.message?.[0]}
        required
      />

      <button
        type="submit"
        disabled={pending}
        className="bg-skyblue text-white px-6 py-3 rounded mt-2 disabled:opacity-50 hover:bg-blue-700 hover:shadow-2xl"
      >
        {pending ? "Wysyłanie..." : "Wyślij wiadomość"}
      </button>

      {state?.success && (
        <p className="text-green-600 font-medium">
          ✓ Wiadomość wysłana pomyślnie!
        </p>
      )}

      {state?.message && (
        <p className="text-red-600 font-medium">✗ {state.message}</p>
      )}

      <p className="text-xs text-gray-500 mt-2">
        Chronione przez reCAPTCHA. Obowiązują{" "}
      </p>
      <p className="text-xs text-gray-500">
        <a href="https://policies.google.com/privacy">Polityka prywatności</a> i{" "}
        <a href="https://policies.google.com/terms">Warunki korzystania</a>{" "}
        Google.
      </p>
    </form>
  );
}
