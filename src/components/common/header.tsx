import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import LocaleSwitcher from "../locale-switcher";
import Link from "next/link";
import ThemeSlider from "./theme-slider";

const Header = () => {
  return (
    <header className="w-full 3xl:max-w-7xl mx-auto">
      <Card className="rounded-none border-b border-none border-primary bg-background drop-shadow-lg">
        <CardContent className="p-0 py-4">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-around lg:justify-between">
            <Link href={"/"}>
              <Image
                src="/logo.svg"
                alt="Guibus"
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-24 object-contain invert dark:invert-0"
              />
            </Link>

            <div className="flex items-center gap-2">
              <LocaleSwitcher />
              <ThemeSlider />
            </div>
          </div>
        </CardContent>
      </Card>
    </header>
  );
};

export default Header;
