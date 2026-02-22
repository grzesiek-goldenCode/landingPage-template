import { ServicesSection } from "@/content/types";
import {
  MdOutlinePhotoSizeSelectLarge,
  MdBathtub,
  MdHouse,
  MdArrowForward,
} from "react-icons/md";

export default function Services({ mainHeader, cards }: ServicesSection) {
  return (
    <section className="py-24 " id="services">
      <div className="w-[80vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-header mb-4">Nasze Usługi</h2>
          <h3 className="text-4xl font-800 text-custom  mb-6">
            Specjalizujemy się w wyzwaniach
          </h3>
          <p className="text-custom/70 ">{mainHeader}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
          {cards.map((card, i) => {
            const Icon = card.icon;

            return (
              <div key={i} className="group services-card">
                <div className="w-16 h-16 bg-skyblue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-skyblue" size={42} />
                </div>
                <h4 className="text-2xl font-700 mb-4">{card.title}</h4>
                <p className="text-slate-custom/60 leading-relaxed mb-6">
                  {card.description}
                </p>
                <span className="text-skyblue font-700 flex items-center gap-2 mb-0">
                  Dowiedz się więcej <MdArrowForward />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
