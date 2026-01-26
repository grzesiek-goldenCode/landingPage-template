import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export type TestimonialItem = {
  name: string;
  role?: string;
  company?: string;
  avatarUrl?: string;
  quote: string;
};

export default function TestimonialCard({
  name,
  role,
  company,
  avatarUrl,
  quote,
}: TestimonialItem) {
  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
      <CardContent className="p-6 flex flex-col h-full">
        {/* Quote */}
        <Quote className="h-6 w-6 text-neutral-300" />

        <p className="mt-4 text-neutral-700 leading-relaxed flex-1">
          “{quote}”
        </p>

        {/* Author */}
        <div className="mt-6 flex items-center gap-4">
          <Avatar className="h-12 w-12">
            {avatarUrl && <AvatarImage src={avatarUrl} alt={name} />}
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div>
            <div className="font-medium leading-tight">{name}</div>

            {(role || company) && (
              <div className="text-sm text-neutral-500">
                {role}
                {role && company && " • "}
                {company}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";

// type CardProps = {
//   item: {
//     name: string;
//     role?: string;
//     company?: string;
//     avatarUrl?: string;
//     quote: string;
//   };
// };
// const placeHolderImage: string = "/profilePlaceholderWoman.png";

// export default function TestimonialCard({ item }: CardProps) {
//   return (
//     <Card>
//       <CardContent className=" flex flex-col aspect-square items-center justify-between p-6">
//         <p className="text-xl  mt-2">{item.quote}</p>
//         <div className="relative w-35 h-35 mt-10 rounded-full outline-5 gap-1 border-2 border-white">
//           <Image
//             src={`${item.avatarUrl ? item.avatarUrl : placeHolderImage}`}
//             alt="Profile Image"
//             priority
//             fill
//             className=" "
//           />
//         </div>
//         <div className="flex flex-col justify-center items-center">
//           <span className="text-xl font-semibold">{item.name}</span>
//           <span className="text-md text-neutral-600">
//             {item.company}
//             <span className="text-sm text-neutral-600"> {item.role}</span>
//           </span>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// to do - dodać pozostałe opcjonalne pola tekstowe, zastanowić się nad układem karty, sprawdzić url avatara
