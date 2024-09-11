"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const TableOfContents = ({ headings }: { headings: string[] }) => {
  return (
    <Card className="col-span-3 h-fit bg-opacity-20 shadow-sm">
      <CardHeader>
        <CardTitle>Table of Contents</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {headings.map((heading, index) => (
            <li key={index}>
              <a
                href={`#${heading.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {heading}
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
export default TableOfContents;
