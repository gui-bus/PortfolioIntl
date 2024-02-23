"use client";

import { useTranslations } from "next-intl";
import { useTransition } from "react";

import { MdGTranslate } from "react-icons/md";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();

  const t = useTranslations("Languages");

  const toggleLocale = (nextLocale: string) => {
    startTransition(() => {
      window.location.href = `/${nextLocale}`;
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarFallback className="cursor-pointer bg-transparent transition-all duration-300 ease-in-out hover:bg-accent">
            <MdGTranslate size={20} className="dark:text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t("language")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => toggleLocale("pt")}>
          {t("pt-br")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toggleLocale("en")}>
          {t("en-us")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toggleLocale("es")}>
          {t("es")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
