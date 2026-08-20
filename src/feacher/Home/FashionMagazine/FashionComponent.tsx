"use client";

import Image, { StaticImageData } from "next/image";
import { UserRound, CalendarDays, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

type FashionComponentProps = {
  title: string;
  description: string;
  image: string | StaticImageData;
  nameAuth: string;
  date: string;
  id:number
};

const FashionComponent = ({
  title,
  description,
  image,
  nameAuth,
  date,
  id
}: FashionComponentProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.article
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive((prev) => !prev)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="
        group
        relative
        h-105
        w-full
        cursor-pointer
        overflow-hidden
        rounded-3xl
        bg-slate-900
        shadow-lg
      "
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-105
        "
      />

      <motion.div
        animate={{
          opacity: isActive ? 0.75 : 0.4,
        }}
        transition={{ duration: 0.4 }}
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/50
          via-black/20
          to-black/90
        "
      />

      <div
        className="
          absolute
          inset-0
          flex
          flex-col
          justify-between
          p-5
          text-white
          sm:p-6
        "
      >
        <div>
          <span
            className="
              inline-flex
              rounded-full
              bg-[#E30076]/90
              px-3
              py-1
              text-xs
              font-bold
              text-white
              backdrop-blur-sm
            "
          >
            مجله نیا لند
          </span>

          <h2
            className="
              mt-4
              text-xl
              font-black
              leading-8
              sm:text-2xl
            "
          >
            {title}
          </h2>
        </div>

        <div>
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                <p
                  className="
                    line-clamp-2
                    text-sm
                    leading-7
                    text-white/85
                    sm:text-[15px]
                  "
                >
                  {description}
                </p>

                <Link href={`/article/${id}`}>
                  <motion.button
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.1,
                      duration: 0.3,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="
      mt-5
      flex
      items-center
      gap-2
      rounded-full
      bg-white
      px-5
      py-2.5
      text-sm
      font-bold
      text-[#E30076]
      transition-colors
      duration-300
      hover:bg-[#E30076]
      hover:text-white
    "
                  >
                    <span>مشاهده جزئیات بیشتر</span>

                    <ArrowLeft size={17} strokeWidth={2} />
                  </motion.button>
                </Link>

                <div className="my-4 h-px w-full bg-white/20" />
              </motion.div>
            )}
          </AnimatePresence>

          <div
            className="
              flex
              items-center
              justify-between
              gap-4
              text-xs
              text-white/80
            "
          >
            <div className="flex items-center gap-2">
              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-white/15
                  backdrop-blur-sm
                "
              >
                <UserRound size={17} strokeWidth={1.7} />
              </div>

              <span>{nameAuth}</span>
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays size={17} strokeWidth={1.7} />

              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default FashionComponent;
