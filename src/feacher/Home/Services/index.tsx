"use client";

import { CreditCard, Truck, ShieldCheck, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type itemType = {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

const items: itemType[] = [
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
    <section className="w-full ">
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
                border-slate-100
                bg-white
                p-6
                shadow-sm
                transition-shadow
                duration-500
                hover:shadow-xl
                hover:shadow-pink-100/40
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
                  bg-pink-50
                "
              />

              <div className="relative z-10">
                <motion.div
                  initial={{
                    backgroundColor: "#fdf2f8",
                    color: "#E30076",
                  }}
                  whileHover={{
                    backgroundColor: "#E30076",
                    color: "#ffffff",
                  }}
                  whileTap={{
                    backgroundColor: "#E30076",
                    color: "#ffffff",
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
                  "
                >
                  <Icon size={27} strokeWidth={1.8} />
                </motion.div>

                <motion.h2
                  initial={{
                    color: "#0f172a",
                  }}
                  whileHover={{
                    color: "#E30076",
                  }}
                  whileTap={{
                    color: "#E30076",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    mb-3
                    text-lg
                    font-black
                  "
                >
                  {item.title}
                </motion.h2>

                <p
                  className="
                    text-sm
                    leading-7
                    text-slate-500
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
