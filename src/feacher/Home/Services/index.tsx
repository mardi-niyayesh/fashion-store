"use client";

import {
  CreditCard,
  Truck,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

type ItemType = {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

const items: ItemType[] = [
  {
    id: 1,
    icon: CreditCard,
    title: "پرداخت درب منزل",
    description:
      "برای ایجاد اطمینان خاطر مشتریان، علاوه بر پرداخت آنلاین امکان پرداخت درب منزل نیز وجود دارد.",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "ضمانت محصول",
    description:
      "تا دو هفته پس از دریافت محصول، در صورت وجود مشکل امکان مرجوع کردن کالا وجود دارد.",
  },
  {
    id: 3,
    icon: Truck,
    title: "تحویل درب منزل",
    description:
      "با ثبت آدرس خود در پروفایل کاربری، محصول را به‌راحتی درب منزل تحویل بگیرید.",
  },
];

const Services = () => {
  return (
    <section className="mt-5 mb-5 w-full">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          gap-5
          px-4
          sm:px-6
          md:grid-cols-2
          lg:grid-cols-3
          lg:px-8
        "
      >
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                p-6
                text-[var(--foreground)]
                shadow-sm
                transition-all
                duration-500
                hover:shadow-xl
                hover:shadow-[var(--primary)]/20
              "
            >

              <motion.div
                initial={{
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.5,
                }}
                whileTap={{
                  scale: 1.5,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  -right-12
                  -top-12
                  h-32
                  w-32
                  rounded-full
                  bg-[var(--primary)]
                  opacity-10
                "
              />

              <div className="relative z-10">

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[var(--muted)]
                    text-[var(--primary)]
                    transition-colors
                    duration-300
                    group-hover:bg-[var(--primary)]
                    group-hover:text-[var(--primary-foreground)]
                  "
                >
                  <Icon
                    size={27}
                    strokeWidth={1.8}
                  />
                </motion.div>


                <motion.h2
                  whileHover={{
                    x: -3,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    mb-3
                    text-lg
                    font-black
                    text-[var(--foreground)]
                    transition-colors
                    duration-300
                    group-hover:text-[var(--primary)]
                  "
                >
                  {item.title}
                </motion.h2>

                {/* Description */}
                <p
                  className="
                    text-sm
                    leading-7
                    text-[var(--muted-foreground)]
                    transition-colors
                    duration-300
                  "
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;