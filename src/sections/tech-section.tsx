'use client'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslations } from "next-intl";
import Image from "next/image";

const icons: { name: string; src: string }[] = [
  {
    name: "JavaScript",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Javascript.svg",
  },
  {
    name: "TypeScript",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Typescript.svg",
  },
  {
    name: "React",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/React.svg",
  },
  {
    name: "Vite",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Vite.svg",
  },
  {
    name: "NextJS",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/NextJS.svg",
  },
  {
    name: "Node.js",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/NodeJS.svg",
  },
  {
    name: "Prisma",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/PrismaORM.svg",
  },
  {
    name: "PostgreSQL",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/24f9a20420b3a7c5ba7bd7b629a2f9e1912db0e2/Light/PostgreSQL.svg",
  },
  {
    name: "MongoDB",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/4abfec039d303a5889b5731d0a46075fb1029eb4/Light/MongoDB.svg",
  },
  {
    name: "Supabase",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Supabase.svg",
  },
  {
    name: "Firebase",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Firebase.svg",
  },
  {
    name: "Axios",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/24f9a20420b3a7c5ba7bd7b629a2f9e1912db0e2/Light/Axios.svg",
  },
  {
    name: "Express.js",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/24f9a20420b3a7c5ba7bd7b629a2f9e1912db0e2/Light/ExpressJS.svg",
  },
  {
    name: "Jest",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/4abfec039d303a5889b5731d0a46075fb1029eb4/Light/Jest.svg",
  },
  {
    name: "Docker",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/4abfec039d303a5889b5731d0a46075fb1029eb4/Light/Docker.svg",
  },
  {
    name: "NextUI",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/NextUI.svg",
  },
  {
    name: "ShadCN/UI",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/ShadCNUI.svg",
  },
  {
    name: "Tailwind CSS",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/TailwindCSS.svg",
  },
  {
    name: "Sass",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Sass.svg",
  },
  {
    name: "Bootstrap",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Bootstrap.svg",
  },
  {
    name: "CSS",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/24f9a20420b3a7c5ba7bd7b629a2f9e1912db0e2/Light/CSS3.svg",
  },
  {
    name: "Framer Motion",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Framer%20Motion.svg",
  },
  {
    name: "Figma",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Figma.svg",
  },
  {
    name: "Vercel",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Vercel.svg",
  },
  {
    name: "GIT",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/GIT.svg",
  },
  {
    name: "React Hook Form",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/React%20Hook%20Form.svg",
  },
  {
    name: "Stripe",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Stripe.svg",
  },
  {
    name: "Next Auth",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Next%20Auth.svg",
  },
  {
    name: "Swiper",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Swiper.svg",
  },
  {
    name: "Sanity CMS",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/70f9ca213e35be00f41c0350d77c238c999db688/Light/Sanity.svg",
  },
  {
    name: "React Native",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/React%20Native.svg",
  },
  {
    name: "Expo",
    src: "https://raw.githubusercontent.com/gui-bus/TechIcons/0e844255c1b6c18ce6558324e2b0acabeca7725d/Light/Expo.svg",
  },
];

const TechSection = () => {
  const t = useTranslations("Tech");
  return (
    <section className="mx-auto w-full max-w-7xl">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="whitespace-nowrap text-3xl font-black uppercase lg:text-5xl">
          {t("title")}
        </h2>
        <p className="w-full text-sm font-light">{t("subtitle")}</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 px-5 pt-5">
        {icons.map((icon, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={icon.src}
                  alt={icon.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-16 w-16 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 xl:h-20 xl:w-20"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">{icon.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </section>
  );
};

export default TechSection;
