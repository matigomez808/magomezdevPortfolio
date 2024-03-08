export default function ContainerSection({ children }, id) {
  return (
    <section className="mx-auto max-w-7xl bg-zinc-300 col-span-full py-8 px-8 bg-opacity-80 md:bg-opacity-100 text-pretty">
      {children}
    </section>
  );
}
