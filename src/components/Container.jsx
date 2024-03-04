import "../app/(home)/globals.css"

export const Container = ({ children }) => {
  return (
    <section className="flex flex-col mx-auto max-w-7xl bg-zinc-300 py-16 px-8 text-pretty bg-opacity-80 md:bg-opacity-100 ">
      {children}
    </section>
  )
}