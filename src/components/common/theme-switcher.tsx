"use client";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { TbSunMoon } from "react-icons/tb";

interface ThemeSwitcherProps {
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

const ThemeSwitcher = ({ size, variant }: ThemeSwitcherProps) => {
  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant={variant}
      onClick={toggleTheme}
      size={size}
      className="rounded-full "
    >
      <span className="sr-only">Alterar Tema</span>
      <TbSunMoon size={20} className="text-white" />
    </Button>
  );
};

export default ThemeSwitcher;
