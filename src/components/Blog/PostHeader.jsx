
import CoverImage from "./CoverImage";
import DateFormatter from "./DateFormatter";
import { PostTitle } from "./PostTitle";




export function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0 max-h-[300px] overflow-hidden">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}