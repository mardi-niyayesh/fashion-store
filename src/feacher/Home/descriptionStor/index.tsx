"use client";

import Image from "next/image";
import imgdes from "../../../../public/imgs/des.jpg";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const DescriptionStor = () => {
  return (
    <section
      className="
        w-full
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
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          items-center
          gap-10
          lg:flex-row
          lg:justify-between
          lg:gap-16
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            order-2
            w-full
            text-right
            lg:order-1
            lg:max-w-2xl
          "
        >
          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="
              text-2xl
              font-black
              leading-[1.8]
              text-[var(--foreground)]
              transition-colors
              duration-300
              sm:text-3xl
              lg:text-4xl
              xl:text-5xl
            "
          >
            خرید راحت پوشاک با{" "}
            <span className="text-[var(--primary)]">
              نیا لند!
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="
              mt-6
              text-sm
              leading-8
              text-[var(--muted-foreground)]
              transition-colors
              duration-300
              sm:text-base
              sm:leading-9
            "
          >
            ما در این فروشگاه تلاش کرده‌ایم مجموعه‌ای متنوع از جدیدترین و
            باکیفیت‌ترین پوشاک را در اختیار شما قرار دهیم؛ محصولاتی که در کنار
            طراحی زیبا و به‌روز، راحتی و کیفیت را نیز در اولویت قرار می‌دهند.
            باور ما این است که لباس تنها یک پوشش نیست، بلکه بخشی از شخصیت، سلیقه
            و سبک زندگی هر فرد است و می‌تواند به شما کمک کند تا اعتمادبه‌نفس
            بیشتری داشته باشید و استایل منحصربه‌فرد خودتان را بسازید.
          </motion.p>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.45,
            }}
            className="
              mt-4
              text-sm
              leading-8
              text-[var(--muted-foreground)]
              transition-colors
              duration-300
              sm:text-base
              sm:leading-9
            "
          >
            از لباس‌های ساده و کاربردی برای استفاده روزمره گرفته تا انتخاب‌های
            خاص و متفاوت برای موقعیت‌های ویژه، تلاش کرده‌ایم تنوعی ایجاد کنیم تا
            هر سلیقه‌ای بتواند محصول موردنظر خود را پیدا کند. ما همواره به دنبال
            انتخاب محصولاتی هستیم که از نظر کیفیت پارچه، دوخت، طراحی و تناسب با
            ترندهای روز در سطح قابل قبولی باشند و تجربه‌ای لذت‌بخش از خرید
            آنلاین برای شما ایجاد کنند.
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
            className="
              mt-7
              flex
              items-center
              gap-2
              border-r-4
              border-[var(--primary)]
              pr-4
              text-sm
              font-semibold
              leading-7
              text-[var(--foreground)]
              transition-colors
              duration-300
              sm:text-base
            "
          >
            <span>
              استایل خودت را پیدا کن، انتخاب کن و با اعتمادبه‌نفس بپوش.
            </span>

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              <Heart
                className="
                  fill-[var(--primary)]
                  text-[var(--primary)]
                  transition-colors
                  duration-300
                "
                size={20}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="
            order-1
            relative
            w-full
            max-w-sm
            lg:order-2
            lg:max-w-md
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="
              absolute
              -bottom-5
              -left-5
              h-32
              w-32
              rounded-full
              bg-[var(--primary)]
              opacity-20
              blur-2xl
            "
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
            className="
              absolute
              -right-4
              -top-4
              h-24
              w-24
              rounded-full
              bg-[var(--primary)]
              opacity-10
              blur-xl
            "
          />


          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-[var(--border)]
              bg-[var(--card)]
              p-2
              shadow-2xl
              shadow-black/10
              transition-colors
              duration-300
            "
          >
            <Image
              src={imgdes}
              alt="مجموعه پوشاک نیا لند"
              width={600}
              height={600}
              className="
                aspect-square
                w-full
                rounded-[1.5rem]
                object-cover
              "
            />
          </motion.div>

      
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.7,
            }}
            animate={{
              y: [0, -5, 0],
            }}
            className="
              absolute
              -bottom-5
              right-4
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--card)]
              px-5
              py-3
              shadow-lg
              transition-colors
              duration-300
              sm:right-6
            "
          >
            <p
              className="
                text-xs
                text-[var(--muted-foreground)]
              "
            >
              انتخابی خاص برای
            </p>

            <p
              className="
                mt-1
                text-sm
                font-black
                text-[var(--primary)]
              "
            >
              استایل خاص تو
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DescriptionStor;