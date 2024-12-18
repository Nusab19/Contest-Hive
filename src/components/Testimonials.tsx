import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { QuoteIcon } from "lucide-react";

const TESTAMENTS = [
  {
    name: "Nusab Taha",
    image: "/assets/images/min/me.jpg",
    title: (
      <>
        Developer of{" "}
        <span className="font-mono font-semibold">this.website</span>
      </>
    ),
    description: (
      <>
        <span className="font-semibold tracking-tighter">Contest Hive</span> has
        been a great tool for my competitive programming journey. It&apos;s genuinely easier than searching for contests by myself.
      </>
    ),
  },

  {
    name: "Random User",
    image: "/assets/images/min/beluga.jpg",
    title: (
      <>
        Potential Engineer @{" "}
        <span className="font-mono font-semibold">Google</span>
      </>
    ),
    description: (
      <>
        I have been using{" "}
        <span className="font-semibold tracking-tighter">Contest Hive</span> for
        couple of months now. I think every competitive programmer should give
        it a try.
      </>
    ),
  },
];

function getCard({
  name,
  title,
  description,
  image,
}: {
  name: string;
  title: JSX.Element | string;
  description: JSX.Element | string;
  image: string;
}) {
  return (
    <Card className="relative text-left" key={name}>
      <CardHeader>
        <div className="flex items-center justify-start gap-2">
          <Image
            src={image}
            alt={name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription className="text-xs md:text-sm">
              {title}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="ml-3 mt-2 text-balance">
        <QuoteIcon className="absolute inset-0 left-6 top-20 rotate-180" />
        {description}
      </CardContent>
    </Card>
  );
}

const Testimonials = async () => {
  return (
    <div className="pb-10">
      <header className="mb-6 inline-block border-b-2 px-4 pb-2 text-center font-heading text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
        Testimonials
      </header>
      <div className="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1">
        {TESTAMENTS.map((i) => getCard(i))}
      </div>
    </div>
  );
};

export default Testimonials;
