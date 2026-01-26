import { CityService } from "@/content/types";
import Header from "./Header";

type Props = {
  data: CityService;
};

export function CityServicePage({ data }: Props) {
  return (
    <section className="py-24 bg-neutral-50 min-h-screen  ">
      <Header />
      <div className="grid md:grid-cols-2">
        <div className="container ml-30 px-6 max-w-3xl">
          <h2 className="text-3xl font-bold">{data.city}</h2>
          <h4 className="tetx-xl ml-4 mt-2"> {data.service}</h4>

          <div className="mt-10 space-y-4 text-neutral-700 leading-relaxed">
            <p className="font-semibold text-2xl mt-3">{data.content.title}</p>
            <p className="text-lg mt-3">{data.content.intro}</p>
            <p className="text-md mt-3">{data.content.description}</p>
          </div>
        </div>
        <div className="h-64 rounded-xl bg-neutral-100 flex items-center justify-center mr-30">
          <span className="text-neutral-400">Mockup / zdjęcie</span>
        </div>
      </div>
      {/* rozmiar do dopracowania po dodaniu mapy! */}
      <div className="h-64 rounded-xl bg-neutral-100 flex items-center justify-center mx-30 mt-30 w-auto">
        <span className="text-neutral-400">Mapa</span>
      </div>
    </section>
  );
}
