import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { marked } from "marked";
const Post = ({ mdxContent }: { mdxContent: string }) => {
  const processMarkdown = (markdown: string) => {
    const html = marked(markdown); // Convert markdown to HTML using marked
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };
  const content = processMarkdown(mdxContent);
  return (
    <div className="prose prose-h1:text-text prose-p:text-text overflow-x-auto">
      <MDXRemote source={mdxContent} />
      {/* {content} */}
    </div>
  );
};

export default Post;
