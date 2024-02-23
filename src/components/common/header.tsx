import Image from "next/image";
import { TbMenuDeep } from "react-icons/tb";
import { Card, CardContent } from "../ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import LocaleSwitcher from "../locale-switcher";
import Link from "next/link";
import ThemeSlider from "./theme-slider";

const Header = () => {
  return (
    <header className="w-full 2xl:max-w-7xl mx-auto">
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
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    className="rounded-full"
                  >
                    <span className="sr-only">Abrir Menu</span>
                    <TbMenuDeep size={20} className="dark:text-white" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </CardContent>
      </Card>
    </header>
  );
};

export default Header;
