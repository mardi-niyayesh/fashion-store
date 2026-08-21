"use client";

import { motion } from "framer-motion";
import ComponentSlidMagazin from "./ComponentSlidMagazin";

const FashionMagazine = () => {
  return (
    <section
      className="
        w-full
        overflow-hidden
        px-4
        py-16
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
            border-[#E30076]
            pr-4
            text-3xl
            font-semibold
            leading-7
            text-slate-700
            sm:text-base
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
              text-slate-500
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
