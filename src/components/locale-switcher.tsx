"use client";

import { useTranslations } from "next-intl";
import { useTransition } from "react";
import { ReactCountryFlag } from "react-country-flag";

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
        <DropdownMenuLabel className="text-xs">
          {t("language")}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex items-center gap-2 text-xs transition-all duration-200 ease-in-out hover:font-medium"
          onClick={() => toggleLocale("pt")}
        >
          <ReactCountryFlag
            countryCode="BR"
            svg
            style={{
              width: "1.5em",
              height: "1.5em",
            }}
            title="BR"
          />
          {t("pt-br")}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-2 text-xs transition-all duration-200 ease-in-out hover:font-medium"
          onClick={() => toggleLocale("en")}
        >
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{
              width: "1.5em",
              height: "1.5em",
            }}
            title="US"
          />
          {t("en-us")}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-2 text-xs transition-all duration-200 ease-in-out hover:font-medium"
          onClick={() => toggleLocale("es")}
        >
          <ReactCountryFlag
            countryCode="ES"
            svg
            style={{
              width: "1.5em",
              height: "1.5em",
            }}
            title="ES"
          />
          {t("es")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
