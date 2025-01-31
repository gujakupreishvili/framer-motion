import React, { useState } from "react";
import { AnimatePresence, motion, stagger  } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {  
      type: "spring", 
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const childVariants ={
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}
const Order = ({ pizza }) => {
  const [showtTitle, setShowTitle] = useState(true)
  setTimeout(()=>{
    setShowTitle(false)
  },4000)
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit='exit'
    >
      <AnimatePresence>
      {showtTitle && (
        <motion.h2
        exit={{y: -1000}}
        >
          Thank you for your order :)
          </motion.h2>
      )}
      </AnimatePresence>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
