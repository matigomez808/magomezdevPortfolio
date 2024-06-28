import Link from "next/link";

import CoverImage from "./CoverImage";
import DateFormatter from "./DateFormatter";


export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="bg-indigo-300 bg-opacity-5">
      <div className="mb-5 max-h-[350px] overflow-hidden">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline font-heading p-4"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4 font-heading font-light p-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4 p-4">{excerpt}</p>
      
    </div>
  );
}