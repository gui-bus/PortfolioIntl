import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { MdOutlineSwipe } from "react-icons/md";

interface ImageLeftProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  linkRepo: string;
  id: string;
}

const ImageLeft = ({
  imageUrl,
  title,
  subtitle,
  description,
  link,
  linkRepo,
  id,
}: ImageLeftProps) => {
  const t = useTranslations("Buttons");

  return (
    <section
      className="mx-auto mt-10 w-full overflow-hidden text-center dark:text-gray-200 relative"
      id={id}
    >
      <div className="flex flex-col justify-center xl:flex-row">
        <Image
          src={imageUrl}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="aspect-video h-full w-full object-contain object-center px-8 xl:w-2/4"
          draggable={false}
        />

        <div className="flex w-full flex-col items-center justify-center p-5 text-center lg:items-start lg:text-start xl:w-2/4">
          <p className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase text-orange-500 dark:font-medium md:justify-start">
            {subtitle}
          </p>
          <div className="w-full">
            <h2 className="whitespace-nowrap text-3xl font-black uppercase lg:text-5xl">
              {title}
            </h2>
            <p className="mt-5 w-full text-sm font-light xl:max-w-3xl">
              {description}
            </p>
          </div>

          <div className="mt-5 flex w-full items-center justify-between gap-2">
            <Button
              className="flex w-full items-center gap-2 p-8 font-bold"
              variant="default"
              asChild
            >
              <Link href={link} className="w-full" target="_blank">
                {t("externalProject")} <HiOutlineExternalLink size={24} />
              </Link>
            </Button>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="w-fit p-8 font-bold "
                    variant="outlineWithoutScale"
                    size={"icon"}
                    asChild
                  >
                    <Link href={linkRepo} target="_blank">
                      <LuGithub size={24} />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t("repository")}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      <MdOutlineSwipe size={30} className="absolute right-5 top-5 opacity-20 hidden md:block"/>
    </section>
  );
};

export default ImageLeft;
