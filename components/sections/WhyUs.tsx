import { WhyUsSection } from "@/content/types";
import Image from "next/image";
import { MdBiotech } from "react-icons/md";

// Todo
// Ikonka przy każdym powinna być inna, nie przy wszystkich <Biotech />

export default function WhyUs({ header, content }: WhyUsSection) {
  return (
    <section id="services" className="bg-custom  py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto my-10 pb-10 w-[80vw] gap-10">
        <div className=" flex flex-col text-white pt-10">
          <h2 className="section-header py-2">Dlaczego My</h2>
          <h3 className="leading-tight py-2 text-4xl">{header}</h3>
          {content.map((item, i) => (
            <div key={i} className="flex items-center my-3">
              <div className="aspect-square rounded-full outline-2 outline-blue-500 m-2 mr-4 text-blue-500">
                <MdBiotech size={48} className="p-2 " />
              </div>
              <div className="flex flex-col">
                <p className="capitalize text-xl tracking-widest my-2">
                  {item.title}
                </p>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center justify-self-end w-[80%] h-auto">
          <div
            className=" border  m-5  p-10  mx-auto rounded-2xl aspect-square w-full relative"
            style={{ borderColor: "rgba(19, 109, 236, 0.3)" }}
          >
            <Image
              src="/whyUsImage.jpg"
              alt="Luksusowa łazienka"
              fill
              className=" scale-90 mx-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
