

export default function ContainerLanding ({ children }, id) {
  return (
    <section className="mx-auto max-w-7xl bg-zinc-300 pt-16 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-2 sm:flex sm:flex-col sm:px-8 sm:bg-opacity-80 md:bg-opacity-100">
      {children}
    </section>
  )
}