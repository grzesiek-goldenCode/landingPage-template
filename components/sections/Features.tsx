import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, ShieldHalf, Timer } from "lucide-react";
import { FeaturesSection } from "@/content/types";
export default function Features({ title, items }: FeaturesSection) {
  return (
    <div className="relative  mx-auto w-[80%] bg-white p-4 rounded-xl shadow-2xl lg:z-10 lg:-mt-32 ">
      <div className="grid gap-8 lg:grid-cols-3">
        <Card>
          <CardContent className="p-3 flex gap-6 items-center justify-center">
            <BadgeCheck className="text-blue-600 bg-blue-100 p-2 rounded-full text-2xl h-10 w-10" />
            <div>
              <p className="text-md font-semibold">{items[0].title}</p>
              <p className="text-sm text-gray-500">{items[0].description}</p>
            </div>
          </CardContent>
        </Card>
        <Card className=" lg:border-x border-dotted px-10">
          <CardContent className="p-3 flex gap-6 items-center justify-center">
            <ShieldHalf className="text-blue-600 bg-blue-100 p-2 rounded-full text-2xl h-10 w-10" />
            <div>
              <p className="text-md font-semibold">{items[1].title}</p>
              <p className="text-sm text-gray-500">{items[1].description}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 flex gap-6 items-center justify-center">
            <Timer className="text-blue-600 bg-blue-100 p-2 rounded-full text-2xl h-10 w-10" />
            <div>
              <p className="text-md font-semibold">{items[2].title}</p>
              <p className="text-sm text-gray-500">{items[2].description}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// {items.map((item) => (
//           <Card key={item.title} className="rounded-2xl shadow-sm">
//             <CardContent className="p-6 flex gap-4">
//               <BadgeCheck className="text-green-500" />
//               <p>{item.title}</p>
//             </CardContent>
//           </Card>
//         ))}
