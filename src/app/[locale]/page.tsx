import HeroSection from "@/sections/hero-section";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <main>
      <HeroSection />
      <div className="mx-auto w-full max-w-7xl p-5">
        <div className="flex flex-col">
          <h1>{t("title")}</h1>
        </div>
      </div>
    </main>
  );
}
