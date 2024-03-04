import { motion } from "framer-motion"
import  Tray  from './tray.svg'
export const DiceTray = () => {
  
  return(
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, transition: 500}}
    className="flex justify-center py-24">
      <Tray height={450} width={900}/>
    </motion.div>
  )
}