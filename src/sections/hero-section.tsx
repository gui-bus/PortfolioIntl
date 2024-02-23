import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { IoChevronDownCircleOutline } from "react-icons/io5";

export default function HeroSection() {
  return (
    <section>
      <div className=" mx-auto flex w-full flex-col items-center justify-center md:relative 2xl:max-w-7xl">
        <Image
          src="/guibusTextBanner.svg"
          alt="Guibus Banner"
          width={0}
          height={0}
          className="relative h-auto w-full object-cover 2xl:rounded-b-xl"
          sizes="100vw"
          priority
          draggable="false"
        />

        <div className="my-3 flex md:absolute md:bottom-3 md:right-3 md:my-0">
          <div className="flex items-center justify-center gap-2 md:flex-col">
            <Button size={"icon"} variant={"outline"} asChild>
              <Link
                href={"https://www.linkedin.com/in/gui-bus/"}
                target="_blank"
              >
                <FaLinkedinIn size={20} />
              </Link>
            </Button>

            <Button size={"icon"} variant={"outline"} asChild>
              <Link href={"https://github.com/gui-bus"} target="_blank">
                <FaGithub size={20} />
              </Link>
            </Button>

            <Button size={"icon"} variant={"outline"} asChild>
              <Link href={"mailto:guibus.dev@gmail.com"} target="_blank">
                <FaMailBulk size={20} />
              </Link>
            </Button>

            <Button size={"icon"} variant={"outline"} asChild>
              <Link href={"https://wa.me/12981847553"} target="_blank">
                <FaWhatsapp size={20} />
              </Link>
            </Button>
          </div>
        </div>

        <IoChevronDownCircleOutline
          className="absolute bottom-3 hidden animate-bounce text-white md:block"
          size={30}
        />
      </div>
    </section>
  );
}
