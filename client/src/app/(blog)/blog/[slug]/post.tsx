"use client";
import { Suspense, useEffect, useState } from "react";
import TableOfContents from "@/components/custom/TableofContent";
const Post = ({ content }: { content: string }) => {
  console.log(content);

  const [headings, setHeadings] = useState<string[]>([]);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const h2Elements = doc.getElementsByTagName("h3");
    const headingTexts = Array.from(h2Elements).map(
      (el) => el.textContent || ""
    );
    setHeadings(headingTexts);
  }, [content]);
  console.log(headings);

  const markup = { __html: content };

  return (
    <div className="grid grid-cols-12">
      <Suspense fallback={<>Loading table of contents...</>}>
        <TableOfContents headings={headings} />
      </Suspense>
      <Suspense fallback={<>Loading content...</>}>
        <div
          className="col-span-8 prose prose-h1:text-text prose-h2:text-text prose-h3:text-text prose-p:text-text prose-strong:text-text"
          dangerouslySetInnerHTML={markup}
        />
      </Suspense>
    </div>
  );
};
export default Post;
