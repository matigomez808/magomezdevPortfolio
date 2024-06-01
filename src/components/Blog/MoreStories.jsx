
import { PostPreview } from "./PostPreview";

export function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-3xl md:text-3xl font-semibold tracking-tighter leading-tight">
        Artículos anteriores
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-10 lg:gap-y-16 pb-10">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}