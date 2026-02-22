import { AboutSection } from "@/content/types";
import { Check } from "lucide-react";

export default function About({ title, description }: AboutSection) {
  return (
    <section
      className="  w-full bg-white pb-20 md:pt-36 z-0 md:-mt-24"
      id="o-mnie"
    >
      <div className="container mx-auto  ">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 lg: p-8">
            <div className="relative">
              <img
                alt="Fachowiec przy pracy"
                className="rounded-2xl shadow-2xl w-full aspect-square object-cover"
                data-alt="Professional tiler working on a wall"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw8yaY6Qiyxw9dhZlzW9INWAcSuzgJw1B-zuh1VjEX8GfPRzuvPa12-Fdu5JKcJs5vqug8Qxam-y2Fw26LX2wKtK17WNXOenKY4APO7tsKYnlqycjCR3V5k9gf4B57QGGGwudiUT7Gg98Lah_qhHb8OfOqsDtz-pCgMY8-MhPPjB6op_TLyUp_Gqf9Xy8S2pqYbiI-BBr8XihAjlVTNXMXycw7IwF5kMMGBBUO_lUHb8n9UbuS2FGo_mykOcNUwIVXMS0k1ibJlMc"
              />
              <div className="absolute -bottom-6 -right-6 bg- p-6 rounded-2xl shadow-xl hidden md:block bg-neutral-900 ">
                <span className="text-white text-4xl font-800 block">100%</span>
                <span className="text-primary-100 text-sm font-600 uppercase text-white">
                  Satysfakcji
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 px-10">
            <h2 className="section-header  mb-4">O mnie</h2>
            <h3 className="text-4xl font-800 mb-6 text-slate dark:text-white leading-tight">
              {title}
            </h3>
            <p className="text-lg text-slate/70 dark:text-gray-400 mb-8 leading-relaxed">
              {description}
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className=" text-primary text-xl">
                  <Check />
                </span>
                <span className="font-600">
                  Doradztwo techniczne przy wyborze materiałów
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons text-primary text-xl">
                  <Check />
                </span>
                <span className="font-600">
                  Profesjonalne cięcie i szlifowanie pod kątem 45°
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons text-primary text-xl">
                  <Check />
                </span>
                <span className="font-600">
                  Systemy poziomowania dla idealnej płaszczyzny
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
