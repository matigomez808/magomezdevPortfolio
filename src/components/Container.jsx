import "../app/(home)/globals.css"

export const Container = ({ children }) => {
  return (
    <section className="mx-auto max-w-7xl bg-zinc-300 pt-8 px-8 text-pretty bg-opacity-80 md:bg-opacity-100 ">
      {children}
    </section>
  )
}