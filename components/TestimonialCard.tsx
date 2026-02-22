import { Card, CardContent } from "@/components/ui/card";
import { FaStar } from "react-icons/fa";

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
    <Card className=" rounded-2xl shadow-sm hover:shadow-md transition bg-light">
      <CardContent className="p-6 py-3 flex flex-col h-full">
        {/* Quote */}
        <div className="flex text-amber-400 mb-4 gap-1">
          <FaStar size={24} className="" />
          <FaStar size={24} className="" />
          <FaStar size={24} className="" />
          <FaStar size={24} className="" />
          <FaStar size={24} className="" />
        </div>
        <p className="my-4 text-custom/70 leading-relaxed flex-1">“{quote}”</p>

        {/* Author */}
        <div className="mt-6 flex items-center justify-center  ">
          <div>
            <div className="font-medium leading-tight">- {name}</div>

            {(role || company) && (
              <div className="text-sm text-skyblue">
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

// Opcja - awatar z inicjałami autora

//  <Avatar className="h-12 w-12">
//             {avatarUrl && <AvatarImage src={avatarUrl} alt={name} />}
//             <AvatarFallback>
//               {name
//                 .split(" ")
//                 .map((n) => n[0])
//                 .slice(0, 2)
//                 .join("")}
//             </AvatarFallback>
//           </Avatar>
