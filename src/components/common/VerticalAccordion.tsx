"use client";
import { MdDesignServices, MdWeb, MdComputer } from "react-icons/md";
import { TbDevices } from "react-icons/tb";
import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./useWindowSize";
import { IconType } from "react-icons";
import { useTranslations } from "next-intl";

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);
  const t = useTranslations("Accordion");

  return (
    <section className="py-4">
      <div className="mx-auto flex h-fit w-full max-w-7xl select-none flex-col overflow-hidden border border-input drop-shadow-xl lg:h-[450px] lg:flex-row rounded-xl">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={t(item.title)}
              imgSrc={item.imgSrc}
              description={t(item.description)}
            />
          );
        })}
      </div>
    </section>
  );
};

interface PanelProps {
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  id: number;
  Icon: IconType;
  title: string;
  imgSrc: string;
  description: string;
}

const Panel = ({
  open,
  setOpen,
  id,
  Icon,
  title,
  imgSrc,
  description,
}: PanelProps) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="group relative flex flex-row-reverse items-center justify-end gap-4 border-b-0 border-r-[1px] border-slate-200 bg-white p-3 transition-colors hover:bg-slate-50 dark:border-white dark:bg-card lg:flex-col"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden rotate-180 font-light text-black dark:text-white lg:block"
        >
          {title}
        </span>
        <span className="block font-light lg:hidden">{title}</span>
        <div className="grid aspect-square w-10 place-items-center bg-primary rounded-full text-white ">
          <Icon size={20}/>
        </div>
        <span className="absolute bottom-0 right-[50%] z-20 h-4 w-4 translate-x-[50%] translate-y-[50%] rotate-45 border-b-[1px] border-r-[1px] border-slate-200 bg-white transition-colors dark:border-0  dark:bg-transparent lg:bottom-[50%] lg:right-0 lg:border-b-0 lg:border-t-[1px]" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="relative flex h-full w-full items-end overflow-hidden bg-black"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="bg-black/40 px-4 py-2 text-center text-sm text-white backdrop-blur-sm md:text-start w-full"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "title01",
    Icon: MdComputer,
    imgSrc: "/Acc01.svg",
    description:
      "description01",
  },
  {
    id: 2,
    title: "title02",
    Icon: MdDesignServices,
    imgSrc: "/Acc02.svg",
    description:
      "description02",
  },
  {
    id: 3,
    title: "title03",
    Icon: MdWeb,
    imgSrc: "/Acc03.svg",
    description:
      "description03",
  },
  {
    id: 4,
    title: "title04",
    Icon: TbDevices,
    imgSrc: "/Acc04.svg",
    description:
      "description04",
  },
];
