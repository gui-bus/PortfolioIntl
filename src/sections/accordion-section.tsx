import VerticalAccordion from "@/components/common/VerticalAccordion";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import BudgetForm from "@/components/budget-form";

const AccordionSection = () => {
  const t = useTranslations("Accordion");
  return (
    <section>
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-2xl font-black uppercase lg:text-4xl">
          {t("sectionTitle")}
        </h1>
        <p className="text-center text-sm font-light lg:text-base">
          {t("sectionDescription")}
        </p>
      </div>

      <VerticalAccordion />

      <Drawer>
        <DrawerTrigger asChild>
          <Button className="flex w-full items-center justify-center gap-2 p-8" size={"lg"}>
            {t("buttonTxt")} <LiaFileInvoiceDollarSolid size={20} />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="mx-auto w-full 2xl:max-w-7xl">
          <DrawerHeader>
            <DrawerTitle>{t("drawerTitle")}</DrawerTitle>
            <DrawerDescription className="mt-5">
              <BudgetForm />
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </section>
  );
};

export default AccordionSection;
