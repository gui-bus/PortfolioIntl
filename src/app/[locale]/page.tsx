import { Separator } from "@/components/ui/separator";
import AccordionSection from "@/sections/accordion-section";
import HeroSection from "@/sections/hero-section";
import ProjectsSection from "@/sections/projects-section";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <main>
      <HeroSection />
      <div className="mx-auto w-full max-w-7xl px-5 md:py-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-2xl font-black uppercase lg:text-4xl">
            {t("title")}
          </h1>
          <p className="text-center text-sm font-light lg:text-base">
            {t("subtitle")}
          </p>
        </div>

        <Separator className="my-5" />

        <AccordionSection />

        <Separator className="mb-5 mt-5 md:mb-0" />

        <ProjectsSection id="Projects" />
      </div>
    </main>
  );
}
