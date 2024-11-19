"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
interface Props {
  children: ReactNode;
}

export default function SectionContainer({ children }: Props) {
  const pathName = usePathname();

  const isAdmin = pathName.startsWith("/admin");

  return (
    <section
      className={`mx-auto ${isAdmin ? "w-screen" : "max-w-3xl"} px-4 sm:px-6 ${
        isAdmin ? " " : "xl:max-w-5xl"
      } xl:px-0`}
    >
      {children}
    </section>
  );
}
