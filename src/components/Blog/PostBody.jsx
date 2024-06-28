export function PostBody({ content }) {
  return (
    <div className="max-w-[80dvw] rounded-md bg-mg-off-white-glow bg-opacity-10 p-4 mx-auto text-pretty">
      <article
        className="prose prose-lg prose-invert "
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
