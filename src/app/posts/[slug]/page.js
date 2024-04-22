
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../lib/apiBlog";

import markdownToHtml from "@/lib/markdownToHtml";
import { Container } from "@/components/UI/Container";

import { PostBody } from "@/components/Blog/PostBody";
import { PostHeader } from "@/components/Blog/PostHeader";

export default async function Post({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        
        <article className="pb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}





