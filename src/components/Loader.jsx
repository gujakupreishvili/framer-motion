import {motion} from "framer-motion"
const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5, // Increase the duration to slow down the animation
        repeatDelay: 0.5, // Optional: Add delay between repeats
      },
      y: {
        repeat: Infinity,
        ease: 'easeOut',
        duration: 0.25, // Increase the duration to slow down the animation
        repeatDelay: 0.5, // Optional: Add delay between repeats
      }
    }
  }
};

const Loader = () =>{
  return (
    <>
    <motion.div className="loader"
     variants={loaderVariants}
     animate="animationOne"
    >


    </motion.div>
    </>

  )
}
export default Loader