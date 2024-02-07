import { FC, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../button/button";

const Navbar: FC<HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
  return (
    <nav
      className={cn(
        "flex items-center space-x-4 lg:space-x-6 justify-between py-2 px-6 sticky top-0",
        className
      )}
      {...props}
    >
      <Link href="/">
        <Image
          src="/images/saladinajar.png"
          alt="Salad in a Jar Logo"
          width={240}
          height={60}
        />
      </Link>
      <div className="flex space-x-3">
        <Button variant="ghost">
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
        </Button>
        <Button variant="outline" className="rounded-3xl">
          <Link
            href="/new-order"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            New Order
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
