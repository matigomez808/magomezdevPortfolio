

export function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto text-pretty">
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}