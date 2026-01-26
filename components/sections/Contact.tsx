"use client";
import { ContactSection } from "@/content/types";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Todo - osoby do kontaktu powinny być listą i renderowane z komponentu

export default function Contact({
  title,
  adress,
  contactData,
  msgText,
}: ContactSection) {
  return (
    <section className="container mx-auto px-6 py-24 grid gap-12 md:grid-cols-2 ">
      <div className="flex flex-col mx-3 mt-10">
        <h3 className="text-3xl font-semibold">{title}</h3>
        <div className="ml-2">
          <p className="text-xl">{adress.city}</p>
          <p className="text-sm">{adress.postalCode} </p>
          <p className="text-sm">{adress.street}</p>
        </div>
        <div className="mt-3 ">
          <p className="text-xl font-semibold">Osoby do kontaktu:</p>
          <div className="ml-2">
            <p className="text-lg">{contactData.name}</p>
            {contactData.postion && <p>{contactData.postion}</p>}
            <p>+48 {contactData.phone}</p>
          </div>
        </div>
        <Button
          size="lg"
          variant="outline"
          className="mt-3 w-fit justify-self-center"
        >
          {msgText}
        </Button>
      </div>
      {adress.googleMapLink && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-6 flex items-center justify-center"
        >
          <iframe
            src={adress.googleMapLink}
            width="600"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-[80%] md:w-full"
          ></iframe>
        </motion.div>
      )}
    </section>
  );
}
