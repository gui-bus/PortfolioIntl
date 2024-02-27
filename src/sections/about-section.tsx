"use client";
import Image from "next/image";
import React from "react";

import ReactCountryFlag from "react-country-flag";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

const quality: { title: string; text: string }[] = [
  {
    title: "title01",
    text: "subtitle01",
  },
  {
    title: "title02",
    text: "subtitle02",
  },
  {
    title: "title03",
    text: "subtitle03",
  },
  {
    title: "title04",
    text: "subtitle04",
  },
  {
    title: "title05",
    text: "subtitle05",
  },
  {
    title: "title06",
    text: "subtitle06",
  },
  {
    title: "title07",
    text: "subtitle07",
  },
  {
    title: "title08",
    text: "subtitle08",
  },
  {
    title: "title09",
    text: "subtitle09",
  },
];

const AboutSection = ({ id }: { id: string }) => {
  const t = useTranslations("About");
  return (
    <section id={id}>
      <div className="mx-auto mt-5 flex w-full max-w-5xl select-none flex-col items-center justify-center px-5 text-center">
        <h2 className="mx-auto flex w-fit items-center justify-center gap-2 rounded-tl-2xl rounded-tr-2xl bg-[#E8E8E8] px-8 py-2 text-sm text-black dark:bg-white">
          Guilherme Bustamante
          <ReactCountryFlag
            countryCode="BR"
            svg
            style={{
              width: "1.5em",
              height: "1.5em",
            }}
            title="BR"
          />
        </h2>
        <div className="flex flex-col rounded-2xl rounded-b-2xl border border-[#E8E8E8] pb-5 dark:border-white md:py-5">
          <div className="flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:px-8">
            <Image
              src="/Profile.png"
              alt="Profile"
              width={0}
              height={0}
              sizes="100vw"
              className="mx-auto mt-8 flex aspect-square h-auto w-44 items-center justify-center rounded-full object-cover md:mt-0"
              draggable="false"
            />

            <p className="pb-2 text-sm font-light">
              {t("about01")}
              <br />
              <br />
              {t("about02")}
            </p>
          </div>
        </div>
      </div>

      <div className="my-5 flex justify-center text-center">
        <p className="select-none text-xl font-black dark:text-white">
          {t("smText01")} <span className="text-xl text-primary">{` . `}</span>{" "}
          {t("smText02")} <span className="text-xl text-primary">{`. `}</span>{" "}
          {t("smText03")} <span className="text-xl text-primary">{`. `}</span>{" "}
          {t("smText04")} <span className="text-xl text-primary">{`. `}</span>{" "}
          {t("smText05")} <span className="text-xl text-primary">{`. `}</span>{" "}
          {t("smText06")}{" "}
        </p>
      </div>

      <Carousel
        className="mx-auto w-full max-w-7xl cursor-grab select-none px-5 active:cursor-grabbing"
        plugins={[
          Autoplay({
            delay: 3500,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {quality.map((item) => (
            <CarouselItem key={item.text} className="md:basis-1/3">
              <Card className="mt-10 text-center">
                <CardHeader className="rounded-t-lg dark:bg-muted">
                  <CardTitle className="text-lg font-bold">
                    {t(item.title)}
                  </CardTitle>
                </CardHeader>
                <Separator className="mb-4" />
                <CardContent className="flex h-16 items-center justify-center text-xs font-light">
                  <p>{t(item.text)}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default AboutSection;
