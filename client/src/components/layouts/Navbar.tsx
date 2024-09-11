import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "../ui/input";
import { ButtonRetro } from "../custom/ButtonRetro";
import { Button } from "../ui/button";
import ToggleTheme from "../custom/ToggleTheme";

export default function MainNavbar() {
  return (
    <header className="sticky mb-8 top-0 z-40 w-full max-w-[100vw] border-b bg-body">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex">
          <Link href="#" className="mr-6 flex items-center" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Logo</span>
          </Link>
          <div className="hidden sm:flex w-full max-w-sm items-center space-x-2">
            <Input
              type="email"
              placeholder="Search Article"
              className="shadow-retro-sm"
            />
            <ButtonRetro size={"sm"} type="submit">
              Search
            </ButtonRetro>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="sm:hidden flex-grow">
          <Input
            type="email"
            placeholder="Search Article"
            className="shadow-retro-sm w-full"
          />
        </div>

        {/* navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button
            variant="ghost"
            size="sm"
            className="relative hover:bg-primary"
          >
            About me
          </Button>
          <Button variant="ghost" size="sm" className="relative">
            Blogs
          </Button>
          <Button variant="ghost" size="sm" className="relative">
            Connect with Me
          </Button>
          <ToggleTheme />
        </nav>
        {/* end of navigation */}

        {/* Hamburger Menu for Mobile */}
        <div className="flex md:hidden items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="#">About me</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#">Blogs</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#">Connect with Me</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <ToggleTheme />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}
