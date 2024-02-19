export default function ContainerCV({ children }, id) {
  return (
    <section className="mx-auto max-w-7xl bg-zinc-300 flex flex-col pt-6 px-8 bg-opacity-80 md:bg-opacity-100">
      {children}
    </section>
  );
}
