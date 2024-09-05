import { MDXRemote } from "next-mdx-remote/rsc";

const Post = ({ mdxContent }: { mdxContent: string }) => {
  return (
    <div className="prose prose-h1:text-text prose-p:text-text">
      <h1>with mdx remote</h1>
      <MDXRemote source={mdxContent} />
    </div>
  );
};

export default Post;
