export default function Footer() {
  return (
    <div
      id="footer"
      className="mb-0 bg-(--color-main) text-neutral-900 text-center"
    >
      <div className="w-[80vw] grid md:grid-cols-3 justify-between items-center mt-10 mx-auto mb-5">
        <div className="flex flex-col gap-1 text-sm items-center">
          <a href="/#hero" className="hover:font-semibold">
            Start
          </a>
          <a href="/#gallery" className="hover:font-semibold">
            Galeria
          </a>
          <a href="/#faq" className="hover:font-semibold">
            Najczęściej zadawane pytania
          </a>
          <a href="/#testimonials" className="hover:font-semibold">
            Opinie
          </a>
          <a className="hover:font-semibold">Polityka Prywatności</a>
          <a className="hover:font-semibold">Regulamin</a>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <p>Nazwa Firmy</p>
          <p>Adres 1</p>
          <p>Adres 2</p>
          <p>NIP / Regon</p>
        </div>

        <div className="flex flex-col items-center ">
          <p className="text-lg font-semibold mb-2">
            ©{new Date().getFullYear()} Nazwa Firmy. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-sm">Zaprojektowane i zbudowane przez:</p>
          <p className="font-semibold text-sm">Grzesiek z GoldenCode </p>
        </div>
      </div>
    </div>
  );
}
