'use client'

import Link from "next/link";


const AnimatedLink = ({ href, children, styles, ...props }) => {
  return (
    <Link 
      href={href}
      className={`text-center p-1 mx-1  rounded min-w-14 hover:bg-mg-green hover:bg-opacity-50 hover:font-bold hover:text-white transition-all duration-50 ease-in  ${styles}`}>
      
        {children}

    </Link>
  )
}

export default AnimatedLink;