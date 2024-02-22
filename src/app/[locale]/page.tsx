import ThemeSwitcher from "@/components/common/theme-switcher";
import LocaleSwitcher from "@/components/locale-switcher";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <main>
      <div className="flex flex-col">
        <h1>{t("title")}</h1>
        <LocaleSwitcher />
        <ThemeSwitcher variant={"link"} size={"icon"} />
      </div>
    </main>
  );
}
