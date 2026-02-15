import Image from "next/image";

type GalleryItemProps = {
  source: string;
  altText: string;
};

export default function GalleryGridItem({ source, altText }: GalleryItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl aspect-4/5 shadow-lg">
      <Image src={source} alt={altText} fill className=" fill" />
      <div className="absolute bottom-0 left-0 z-10 m-5">
        <p className="uppercase text-md">Warszawa</p>

        <h4 className="text-xl">Łazienka w spiekach kwarcowych </h4>
      </div>
    </div>
  );
}
