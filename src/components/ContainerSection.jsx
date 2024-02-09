

export default function ContainerSection ({ children }, id) {
  return (
    <section className="mx-auto max-w-7xl bg-zinc-300 col-span-full pt-6 px-8 sm:bg-opacity-80 lg:bg-opacity-100 text-justify">
      {children}
    </section>
  )
}