'use client'

import Link from "next/link";
import { motion } from "framer-motion";

const AnimatedLink = ({ href, children, ...props }) => {
  return (
    <Link 
    href={href}
    >
      <motion.div
        {...props}
        whileHover={{
          backgroundColor: "#006600",
          transition: { duration: 0.5, ease: "easeOut" }
        }}
        whileTap={{
          backgroundColor: "#006600",
          scale: 0.9
        }}
        
       
      >

        {children}

      </motion.div>
    </Link>
  )
}

export default AnimatedLink;