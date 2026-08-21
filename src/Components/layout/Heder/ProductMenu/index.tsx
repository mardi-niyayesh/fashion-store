"use client";

import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ItemMenuType = {
  id: number;
  title: string;
};

type ProductMenuProps = {
  isOpen: boolean;
};

const itemMenu: ItemMenuType[] = [
  {
    id: 1,
    title: "لباس زنانه",
  },
  {
    id: 2,
    title: "کیف",
  },
  {
    id: 3,
    title: "کفش",
  },
  {
    id: 4,
    title: "اکسسوری",
  },
];

const ProductMenu = ({ isOpen }: ProductMenuProps) => {
return (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{
          opacity: 0,
          y: -10,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: -10,
          scale: 0.97,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        className="
          absolute
          right-0
          top-full
          z-50
          mt-4
          w-64
          overflow-hidden
          rounded-2xl
          border
          border-[var(--border)]
          bg-[var(--card)]
          p-2
          shadow-xl
          shadow-black/10
          transition-colors
          duration-300
        "
      >
        <div
          className="
            border-b
            border-[var(--border)]
            px-4
            py-3
          "
        >
          <p
            className="
              text-sm
              font-black
              text-[var(--foreground)]
              transition-colors
              duration-300
            "
          >
            دسته‌بندی محصولات
          </p>
        </div>
        <div className="mt-2">
          {itemMenu.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{
                opacity: 0,
                x: 10,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.05,
                duration: 0.25,
              }}
              type="button"
              className="
                group
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                px-4
                py-3
                text-right
                transition-all
                duration-300
                hover:bg-[var(--muted)]
              "
            >
              <span
                className="
                  text-sm
                  font-semibold
                  text-[var(--foreground)]
                  transition-colors
                  duration-300
                  group-hover:text-[var(--primary)]
                "
              >
                {item.title}
              </span>

              <ArrowLeft
                size={18}
                strokeWidth={1.8}
                className="
                  text-[var(--muted-foreground)]
                  transition-all
                  duration-300
                  group-hover:-translate-x-1
                  group-hover:text-[var(--primary)]
                "
              />
            </motion.button>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
};

export default ProductMenu;
