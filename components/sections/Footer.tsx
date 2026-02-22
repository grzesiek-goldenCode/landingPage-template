import { MdGridView } from "react-icons/md";

export default function Footer() {
  return (
    <div
      id="footer"
      className="mb-0 bg-(--color-main) text-neutral-900 text-center"
    >
      <div className="w-[80vw] flex flex-col lg:flex-row  justify-center mt-10 mx-auto mb-5">
        <div className="flex  justify-center items-center gap-1 lg:w-1/3">
          <MdGridView className="w-12 h-12 text-skyblue" />
          <span className="text-xl font-800 tracking-tighter text-slate-custom dark:text-white uppercase">
            Glazu<span className="text-skyblue">Master</span>
          </span>
        </div>

        <div className="flex flex-col items-center lg:w-1/3">
          <p className="text-lg font-semibold mb-2">
            ©{new Date().getFullYear()} Nazwa Firmy. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-sm">Zaprojektowane i zbudowane przez:</p>
          <p className="font-semibold text-sm">Grzesiek z GoldenCode </p>
        </div>
        <div className="flex gap-2 text-sm items-center lg:w-1/3 justify-center ">
          <a className="hover:font-semibold">Polityka Prywatności</a>
          <a className="hover:font-semibold">Regulamin</a>
        </div>
      </div>
    </div>
  );
}
