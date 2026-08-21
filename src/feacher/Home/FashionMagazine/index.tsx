"use client";

import { motion } from "framer-motion";
import ComponentSlidMagazin from "./ComponentSlidMagazin";

const FashionMagazine = () => {
return (
  <section
    className="
      w-full
      overflow-hidden
      bg-[var(--background)]
      px-4
      py-16
      transition-colors
      duration-300
      sm:px-6
      lg:px-8
      lg:py-24
    "
  >
    <div className="mx-auto w-full max-w-7xl">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
        }}
        className="mb-10 text-right"
      >
        <h2
          className="
            mt-7
            flex
            items-center
            gap-2
            border-r-4
            border-[var(--primary)]
            pr-4
            text-2xl
            font-black
            leading-8
            text-[var(--foreground)]
            transition-colors
            duration-300
            sm:text-3xl
          "
        >
          دنیای مد و استایل
        </h2>

        <p
          className="
            mt-3
            max-w-2xl
            text-sm
            leading-7
            text-[var(--muted-foreground)]
            transition-colors
            duration-300
            sm:text-base
          "
        >
          ایده‌های جذاب، راهنمای خرید و جدیدترین نکات دنیای مد را در مجله نیا
          لند دنبال کنید.
        </p>
      </motion.div>

      <ComponentSlidMagazin />
    </div>
  </section>
);
};

export default FashionMagazine;
