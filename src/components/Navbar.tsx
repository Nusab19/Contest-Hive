"use client";
import Link from "next/link";
import Image from "next/image";
import { useHotkeys } from "react-hotkeys-hook";

import { CodeIcon } from "@radix-ui/react-icons";

import { ModeToggle } from "./ui/theme-toggle";
import { Separator } from "./ui/separator";
import { Button, buttonVariants } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import NavMenu from "./mobile/NavMenu";
import FocusMode from "./sub/FocusMode";
import KeyboardShortcuts from "./sub/KeyboardShortcuts";
import { cn } from "@/lib/utils";

const OLD_WEBSITE = "https://contest-hive-old.vercel.app";

const NavBar = ({
  isFocusMode,
  setFocusMode,
}: {
  isFocusMode?: boolean;
  setFocusMode?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useHotkeys(
    "alt+f",
    (e) => {
      e.preventDefault();
      if (setFocusMode) setFocusMode((prev) => !prev);
    },
    {
      enableOnFormTags: true,
    },
  );

  return (
    <div className="sticky inset-0 top-0 z-50 h-12 backdrop-blur-lg md:h-14">
      <MaxWidthWrapper>
        <div className="flex h-12 flex-1 items-center justify-between gap-2 px-2 md:h-14 md:gap-4">
          <Link
            href="/"
            className="flex h-full items-center gap-0.5 self-center px-1 md:gap-2"
          >
            <Image
              src="/favicon.svg"
              height={1}
              width={1}
              alt="Contest Hive Logo"
              className="h-8 w-8 md:h-10 md:w-10"
            />
            <p className="text-lg font-semibold tracking-tighter text-primary md:text-2xl">
              Contest Hive
            </p>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/about"
              className={cn(
                buttonVariants({
                  variant: "link",
                }),
                "px-1 lg:px-2",
              )}
            >
              About
            </Link>
            <Link
              href="/credits"
              className={cn(
                buttonVariants({
                  variant: "link",
                }),
                "px-1 lg:px-2",
              )}
            >
              Credits
            </Link>

            <Link
              href={OLD_WEBSITE}
              target="_blank"
              className={cn(
                buttonVariants({
                  variant: "link",
                }),
                "px-0 lg:px-2",
              )}
            >
              Old Website
            </Link>
            <Separator className="ml-1 mr-2 w-7 rotate-90" />
            <DropdownMenu>
              <DropdownMenuTrigger className="hidden select-none focus-visible:outline-none md:block">
                <Button
                  className="h-10 w-10 p-2"
                  variant="outline"
                  size="icon"
                  asChild
                  title="Show Shortcuts"
                >
                  <CodeIcon className="h-10 w-10" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[300px] p-1" align="center">
                <KeyboardShortcuts />
              </DropdownMenuContent>
            </DropdownMenu>
            {isFocusMode !== undefined && setFocusMode !== undefined && (
              <FocusMode
                isFocusMode={isFocusMode}
                setFocusMode={setFocusMode}
              />
            )}
            <ModeToggle />
          </div>
          <span className="flex items-center gap-1 md:hidden">
            {isFocusMode !== undefined && setFocusMode !== undefined && (
              <FocusMode
                setFocusMode={setFocusMode}
                isFocusMode={isFocusMode}
              />
            )}
            <ModeToggle />
            <NavMenu />
          </span>
        </div>
      </MaxWidthWrapper>
      <Separator />
    </div>
  );
};

export default NavBar;
