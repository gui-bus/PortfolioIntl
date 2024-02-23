"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { MdGTranslate } from "react-icons/md";

interface LocaleSwitcherProps {
  size: "sm" | "lg" | "icon" | "default" | null | undefined;
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}

export default function LocaleSwitcher({ size, variant }: LocaleSwitcherProps) {
  const [isPending, startTransition] = useTransition();
  const localActive = useLocale();

  const toggleLocale = () => {
    const nextLocale = localActive === "pt" ? "en" : "pt";
    startTransition(() => {
      window.location.href = `/${nextLocale}`;
    });
  };

  return (
    <Button
      variant={variant}
      onClick={toggleLocale}
      size={size}
      disabled={isPending}
      className="rounded-full text-black dark:text-white/70"
    >
      <span className="sr-only">Alterar Idioma</span>
      <MdGTranslate size={20} className="text-white" />
    </Button>
  );
}
