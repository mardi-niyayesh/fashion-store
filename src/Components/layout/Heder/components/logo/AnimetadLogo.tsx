"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../../../../../../public/imgs/logo.jpg";

export default function AnimatedLogo() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="cursor-pointer"
    >
      <div className="flex items-center">
        <div className="h-20 w-20 overflow-hidden rounded-full">
          <Image
            src={logo}
            alt="لوگو"
            width={64}
            height={64}
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <span className="font-medium text-[#E30076] text-2xl">نیا  لند</span>
        
      </div>
    </motion.div>
  );
}
