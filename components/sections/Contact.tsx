"use client";
import { ContactSection } from "@/content/types";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";
import { FaPhone, FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

// Todo - osoby do kontaktu powinny być listą i renderowane z komponentu

export default function Contact({
  title,
  adress,
  contactData,
  msgText,
}: ContactSection) {
  return (
    <section className="bg-white py-10">
      <div className="flex flex-col lg:flex-row justify-center w-[80%] mx-auto my-10 rounded-2xl overflow-hidden bg-light">
        <div className=" w-3/5">
          <h3 className="text-3xl my-10 mb-15 px-30 leading-tight">
            Zapytaj o wycenę
          </h3>
          <ContactForm />
        </div>
        <div className="bg-custom w-2/5">
          <h3 className="text-3xl text-white  my-10 mb-15 px-20 leading-tight">
            Dane Kontaktowe
          </h3>
          <div className="w-[80%] mx-auto px-5">
            <p className="text-gray-400 mb-20">
              Masz pytania? Chcesz omówić swój projekt? Zadzwoń lub napisz -
              odpowiadamy w ciągu 24h.
            </p>
            <div className="my-10 flex ">
              <FaPhone className="text-skyblue bg-skyblue/10 p-3  h-12 w-12 rounded-lg mr-2" />
              <div className="ml-5">
                <p className="uppercase text-sm text-gray-400 leading-tight">
                  zadzwoń do nas
                </p>
                <p className="text-white text-lg">+48 123 456 789</p>
              </div>
            </div>
            <div className="my-10 flex">
              <IoIosMail className="text-skyblue bg-skyblue/10 p-3  h-12 w-12 rounded-lg" />
              <div className="ml-5">
                <p className="uppercase text-sm text-gray-400 leading-tight">
                  napisz do nas
                </p>
                <p className="text-white text-lg">mail@example.com</p>
              </div>
            </div>
            <div className="my-10 flex">
              <FaLocationDot className="text-skyblue bg-skyblue/10 p-3  h-12 w-12 rounded-lg" />
              <div className="ml-5">
                <p className="uppercase text-sm text-gray-400 leading-tight">
                  obszar działania
                </p>
                <p className="text-white text-lg">Warszawa i okolice (+50km)</p>
              </div>
            </div>
            <div className="pt-12 border-t border-white/10"></div>
            <div>
              <p className="uppercase text-sm text-gray-400 leading-tight mb-3">
                Znajdź nas na
              </p>
              <div className="flex gap-5">
                <FaFacebookF className="text-skyblue bg-skyblue/10 p-3 h-12 w-12 rounded-lg" />
                <FaInstagram className="text-skyblue bg-skyblue/10 p-3 h-12 w-12 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// opcjonalna mapa z lokalizacją:

// {adress.googleMapLink && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="bg-white rounded-2xl shadow-xl p-6 flex items-center justify-center"
//           >
//             <iframe
//               src={adress.googleMapLink}
//               width="600"
//               height="300"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               className="w-[80%] md:w-full"
//             ></iframe>
//           </motion.div>
//         )}
