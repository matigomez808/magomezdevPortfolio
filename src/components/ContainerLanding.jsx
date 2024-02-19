export default function ContainerLanding({ children }, id) {
  return (
    <section className="mx-auto max-w-7xl bg-zinc-300 pt-8 px-8 text-pretty lg:grid lg:grid-cols-2 lg:gap-2 sm:flex sm:flex-col  bg-opacity-80 md:bg-opacity-100">
      {children}
    </section>
  );
}
