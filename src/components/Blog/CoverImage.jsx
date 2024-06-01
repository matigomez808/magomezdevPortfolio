import Link from "next/link";
import Image from "next/image";


const CoverImage = ({ title, src, slug }) => {
  const image = (
    <Image
      src={src}
      alt={`Imagen de portada para ${title}`}
      className="shadow-sm w-full h-[40rem] hover:shadow-lg transition-shadow duration-200 object-cover"
      height={1000}
      width={1300}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;