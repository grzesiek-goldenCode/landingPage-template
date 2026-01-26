import Link from "next/link";

export default function Header() {
  return (
    <div className="absolute top-2 left-10 hover:shadow-2xl">
      <Link href={"/"} className="font-semibold text-xl ">
        Strona Główna
      </Link>
    </div>
  );
}
