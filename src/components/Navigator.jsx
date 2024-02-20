import Link from "next/link"

const Navigator = () => {
  return (
    <nav className="mx-auto max-w-7xl bg-zinc-300 pt-8 px-8 text-pretty">
      <Link href="/" className="border-none font-bold text-xl px-4 active:bg-[#07876a] active:bg-opacity-90 focus:outline-none focus:ring-0 focus:bg-[#07876a] focus:bg-opacity-60 hover:bg-[#07876a] hover:bg-opacity-30 rounded-lg">
        Home
      </Link>
      <Link href="/cv" className="border-none font-bold text-xl px-4 active:bg-[#07876a] active:bg-opacity-90 focus:outline-none focus:ring-0 focus:bg-[#07876a] focus:bg-opacity-60 hover:bg-[#07876a] hover:bg-opacity-30 rounded-lg">
        CV
      </Link>
      <Link href="/blog" className="border-none font-bold text-xl px-4 active:bg-[#07876a] active:bg-opacity-90 focus:outline-none focus:ring-0 focus:bg-[#07876a] focus:bg-opacity-60 hover:bg-[#07876a] hover:bg-opacity-30 rounded-lg">
        Blog
      </Link>
    </nav>  
  )
}

export default Navigator;