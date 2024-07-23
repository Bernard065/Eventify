import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Navbar from "./Navbar";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            height={24}
            width={24}
            alt="mobile-menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image
            src="/assets/images/logo.svg"
            height={38}
            width={128}
            alt="logo"
          />
          <Separator className="border border-gray-100" />
          <Navbar />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
