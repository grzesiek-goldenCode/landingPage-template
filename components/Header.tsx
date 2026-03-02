import { MdGridView, MdPhone } from "react-icons/md";

export default function Header() {
  return (
    <div id="header" className="w-full bg-white ">
      <div className="w-[80%] flex items-center justify-center mx-auto ">
        <div className="flex  justify-start items-center gap-1 lg:w-1/3 my-1">
          <MdGridView className="w-12 h-12 text-skyblue" />
          <span className="text-xl font-800 tracking-tighter text-slate-custom dark:text-white uppercase">
            Glazu<span className="text-skyblue">Master</span>
          </span>
        </div>
        <div className="flex items-center justify-end gap-5 lg:w-2/3 my-1">
          <a
            href="#o-mnie"
            className=" hover:text-gray-800 hover:[text-shadow:0_0_0.5px_currentColor,0_0_0.5px_currentColor]"
          >
            O mnie
          </a>
          <a
            href="#services"
            className=" hover:text-gray-800 hover:[text-shadow:0_0_0.5px_currentColor,0_0_0.5px_currentColor]"
          >
            Usługi
          </a>
          <a
            href="#gallery"
            className=" hover:text-gray-800 hover:[text-shadow:0_0_0.5px_currentColor,0_0_0.5px_currentColor]"
          >
            Galeria
          </a>
          <a
            href="#contact"
            className=" hover:text-gray-800 hover:[text-shadow:0_0_0.5px_currentColor,0_0_0.5px_currentColor]"
          >
            Kontakt
          </a>
          <button className="bg-skyblue text-white px-6 py-2 rounded  disabled:opacity-50 hover:bg-blue-700 hover:shadow-2xl flex items-center justify-center  group">
            <span className="mr-3 group-hover:rotate-5 transition transform">
              <MdPhone size={24} />{" "}
            </span>{" "}
            Zadzwoń teraz
          </button>
        </div>
      </div>
    </div>
  );
}
