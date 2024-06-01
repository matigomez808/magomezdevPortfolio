

export function PostBody({ content }) {
  return (
    <div className="max-w-[1000px] rounded-md bg-[#585858] bg-opacity-20 p-4 mx-auto text-pretty">
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}