"use client";

import { motion } from "framer-motion";

type Props = {
  item: string;
  index: number;
  active?: boolean;
  onClick?: () => void;
};

export default function AnimatedMenuItem({
  item,
  index,
  active = false,
  onClick,
}: Props) {
  return (
    <motion.li
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
      }}
      onClick={onClick}
      className={`
        group
        relative
        cursor-pointer
        whitespace-nowrap
        transition-colors
        duration-300
        ${active ? "text-[#E30076]" : "text-slate-700 hover:text-[#E30076]"}
      `}
    >
      {item}

      <span
        className={`
          absolute
          -bottom-2
          right-0
          h-0.5
          rounded-full
          bg-[#E30076]
          transition-all
          duration-300
          ${active ? "w-full" : "w-0 group-hover:w-full"}
        `}
      />
    </motion.li>
  );
}