"use client";
import { sendMessage } from "../actions";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import FormField from "@/components/FormField";
import Header from "@/components/Header";
import ContactForm from "@/components/sections/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Header />

      <ContactForm />
    </>
  );
}
