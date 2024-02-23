"use client";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

type ToggleOptionsType = "light" | "dark";

const ThemeSlider = () => {
  const [selected, setSelected] = useState<ToggleOptionsType>("light");
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      setSelected("light");
    } else {
      setSelected("dark");
    }
  }, [theme]);

  return (
    <div
      className={`grid place-content-center bg-transparent px-2 transition-colors`}
    >
      <SliderToggle selected={selected} setSelected={setSelected} />
    </div>
  );
};

const SliderToggle = ({
  selected,
  setSelected,
}: {
  selected: ToggleOptionsType;
  setSelected: Dispatch<SetStateAction<ToggleOptionsType>>;
}) => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="relative flex w-fit items-center rounded-full">
      <Button
        variant={"link"}
        className={`${TOGGLE_CLASSES} ${
          selected === "light" ? "text-white" : "text-black opacity-65"
        }`}
        onClick={() => {
          setSelected("light");
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" size={15} />
      </Button>
      <Button
        variant={"link"}
        className={`${TOGGLE_CLASSES} ${
            selected === "dark" ? "text-white" : "text-white opacity-65"
          }`}
        onClick={() => {
          setSelected("dark");
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" size={15} />
      </Button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-orange-600 to-yellow-600"
        />
      </div>
    </div>
  );
};

export default ThemeSlider;
