
import CoverImage from "./CoverImage";
import Link from "next/link";
import DateFormatter from "./DateFormatter";

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section className="bg-indigo-300 bg-opacity-5">
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 ">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline px-4"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 px-4 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div className="p-4">
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
}