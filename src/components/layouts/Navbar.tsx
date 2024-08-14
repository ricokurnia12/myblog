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
    <header className="sticky top-0 z-40 w-full border-b bg-body">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex">
          <Link href="#" className="mr-6 flex items-center" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Logo</span>
          </Link>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="email"
              placeholder="Search Article"
              className="shadow-retro-sm"
            />
            <ButtonRetro  size={"sm"} type="submit">
              Search
            </ButtonRetro>
          </div>
        </div>
        <nav className="hidden items-center space-x-6 md:flex">
          {/* untuk menu lainya  */}
          <Button
            variant="ghost"
            size="sm"
            className="relative hover:bg-primary"
          >
            About me
            {/* <ChevronDownIcon className="ml-2 h-4 w-4" /> */}
          </Button>
          <Button variant="ghost" size="sm" className="relative">
            Blogs
            {/* <ChevronDownIcon className="ml-2 h-4 w-4" /> */}
          </Button>
          <Button variant="ghost" size="sm" className="relative">
            Connect with Me
            {/* <ChevronDownIcon className="ml-2 h-4 w-4" /> */}
          </Button>
          <ToggleTheme />
        </nav>
        <div className="md:hidden">
          {/* <Button variant="ghost" size="icon" className="rounded-full">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button> */}
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
