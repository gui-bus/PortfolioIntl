"use client";
import React, { useEffect, useState } from "react";
import ImageLeft from "@/components/projects/imageLeft";
import { useTranslations } from "next-intl";

import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projectData = [
  {
    title: "DeliMix",
    imageUrl:
      "https://github.com/gui-bus/DeliMix/blob/main/github/desktop_01_dark.png?raw=true",
    sub: "DelimixSub",
    desc: "DelimixDescription",
    link: "https://delimix.vercel.app/",
    repoLink: "https://github.com/gui-bus/DeliMix",
    id: "DeliMix",
  },
  {
    title: "QUICK BARBER",
    imageUrl:
      "https://github.com/gui-bus/QuickBarber/blob/main/Github/Desktop/Dark/desktop_01_dark.png?raw=true",
    sub: "QuickBarberSub",
    desc: "QuickBarberDescription",
    link: "https://quickbarber.vercel.app/",
    repoLink: "https://github.com/gui-bus/QuickBarber",
    id: "QUICKBARBER",
  },
  {
    title: "Gamtech",
    imageUrl:
      "https://github.com/gui-bus/Gamtech/blob/main/Github/Desktop_Dark/desktop_home_dark_01.png?raw=true",
    sub: "GamtechSub",
    desc: "GamtechDescription",
    link: "https://gamtech.vercel.app/",
    repoLink: "https://github.com/gui-bus/Gamtech",
    id: "Gamtech",
  },
  {
    title: "Hotefy",
    imageUrl:
      "https://github.com/gui-bus/Hotefy/blob/main/github/desktop/desktop_home_dark.png?raw=true",
    sub: "HotefySub",
    desc: "HotefyDescription",
    link: "https://hotefy.vercel.app/",
    repoLink: "https://github.com/gui-bus/Hotefy",
    id: "Hotefy",
  },
  {
    title: "Blog James Webb",
    imageUrl:
      "https://github.com/gui-bus/JamesWebbBlog/blob/main/github/desktop_01.png?raw=true",
    sub: "JWSub",
    desc: "JWDescription",
    link: "https://jameswebb.vercel.app/",
    repoLink: "https://github.com/gui-bus/JamesWebbBlog",
    id: "JamesWebb",
  },
  {
    title: "ONDesk",
    imageUrl:
      "https://github.com/gui-bus/ONDesk/blob/main/github/desktop_01.png?raw=true",
    sub: "ONDeskSub",
    desc: "ONDeskDescription",
    link: "https://ondesk.vercel.app/",
    repoLink: "https://github.com/gui-bus/ONDesk",
    id: "ONDesk",
  },
  {
    title: "O Pedal Café",
    imageUrl:
      "https://github.com/gui-bus/oPedalCafe/blob/main/github/desktop_login.png?raw=true",
    sub: "PedalSub",
    desc: "PedalDescription",
    link: "https://o-pedal-cafe.vercel.app/",
    repoLink: "https://github.com/gui-bus/oPedalCafe",
    id: "oPedalCafe",
  },
  {
    title: "Cinedex",
    imageUrl:
      "https://github.com/gui-bus/Cinedex/blob/main/github/desktop_home_light.png?raw=true",
    sub: "CinedexSub",
    desc: "CinedexDescription",
    link: "https://cinedex.vercel.app/discover/now_playing",
    repoLink: "https://github.com/gui-bus/Cinedex",
    id: "Cinedex",
  },
  {
    title: "DriveX",
    imageUrl:
      "https://github.com/gui-bus/Drivex/blob/main/Github/DriveX/Images/MacbookAir-1.png?raw=true",
    sub: "DriveXSub",
    desc: "DriveXDescription",
    link: "https://drivex-cars.vercel.app/",
    repoLink: "https://github.com/gui-bus/DriveX",
    id: "DriveX",
  },
  {
    title: "The Bread King",
    imageUrl:
      "https://github.com/gui-bus/TheBreadKing/blob/main/github/desktop_01.png?raw=true",
    sub: "BreadKingSub",
    desc: "BreadKingDescription",
    link: "https://thebreadking.vercel.app/",
    repoLink: "https://github.com/gui-bus/TheBreadKing",
    id: "TheBreadKing",
  },
];

const ProjectsSection = ({ id }: { id: string }) => {
  const t = useTranslations("Projects");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="mx-auto w-full max-w-7xl select-none" id={id}>
      <div className="flex w-full flex-col items-center justify-center text-center">
        <h2 className="whitespace-nowrap text-3xl font-black uppercase lg:text-5xl">
          {t("title")}
        </h2>
        <p className="w-full text-sm font-light">{t("subtitle")}</p>
      </div>

      <Carousel
        className="mx-auto w-full max-w-7xl"
        setApi={setApi}
        opts={{
          loop: true,
        }}
      >
        <div className="mt-2 flex items-center justify-center gap-2 md:hidden">
          <div className="left-1/2 top-3 -translate-x-1/2 -translate-y-1/2 transform">
            <CarouselPrevious />
          </div>

          <p className="text-sm font-light">
            {current}/{count}
          </p>

          <div className="left-1/2 top-3 -translate-x-1/2 -translate-y-1/2 transform">
            <CarouselNext />
          </div>
        </div>
        <CarouselContent className="cursor-grab active:cursor-grabbing">
          {projectData.map((project) => (
            <CarouselItem key={project.id}>
              <ImageLeft
                imageUrl={project.imageUrl}
                title={project.title}
                subtitle={t(project.sub)}
                description={t(project.desc)}
                link={project.link}
                linkRepo={project.repoLink}
                id={project.id}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="my-2 hidden items-center justify-center gap-2 md:flex">
          <div className="left-1/2 top-3 -translate-x-1/2 -translate-y-1/2 transform">
            <CarouselPrevious />
          </div>

          <p className="text-sm font-light">
            {current}/{count}
          </p>

          <div className="left-1/2 top-3 -translate-x-1/2 -translate-y-1/2 transform">
            <CarouselNext />
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default ProjectsSection;
