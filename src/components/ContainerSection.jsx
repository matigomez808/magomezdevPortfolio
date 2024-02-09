export default function ContainerSection({ children }, id) {
  return (
    <section className="mx-auto max-w-7xl bg-zinc-300 col-span-full pt-6 px-8 bg-opacity-80 md:bg-opacity-100 text-justify">
      {children}
    </section>
  );
}
