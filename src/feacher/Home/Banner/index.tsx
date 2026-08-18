"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import baner1 from "../../../../public/imgs/baner1.jpg";
import baner2 from "../../../../public/imgs/baner2.jpg";
import baner3 from "../../../../public/imgs/baner3.jpg";
import baner4 from "../../../../public/imgs/baner4.jpg";

const banners = [
  {
    id: 1,
    image: baner1,
    title: "استایل خودت رو بساز",
    description: "جدیدترین کالکشن لباس‌ها را کشف کن",
  },
  {
    id: 2,
    image: baner2,
    title: "جدیدترین ترندها",
    description: "برای استایلی متفاوت و خاص",
  },
  {
    id: 3,
    image: baner3,
    title: "انتخابی برای هر سلیقه",
    description: "زیبایی را در جزئیات پیدا کن",
  },
  {
    id: 4,
    image: baner4,
    title: "کالکشن جدید",
    description: "استایل جدیدت از اینجا شروع میشه",
  },
];

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        loop
        speed={800}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        onSwiper={setSwiper}
        className="h-[420px] w-full sm:h-[480px] lg:h-[600px]"
      >
        {banners.map((banner) => {
          const isActive = activeSlide === banner.id;

          return (
            <SwiperSlide key={banner.id}>
              <div
                className="group relative h-full w-full cursor-pointer"
                onMouseEnter={() => {
                  setActiveSlide(banner.id);
                  swiper?.autoplay.stop();
                }}
                onMouseLeave={() => {
                  setActiveSlide(null);
                  swiper?.autoplay.start();
                }}
                onClick={() => {
                  setActiveSlide((prev) =>
                    prev === banner.id ? null : banner.id,
                  );

                  swiper?.autoplay.stop();
                }}
              >
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  priority={banner.id === 1}
                  sizes="100vw"
                  className="
                    object-cover
                    transition-transform
                    duration-1000
                    group-hover:scale-105
                  "
                />
                <motion.div
                  animate={{
                    opacity: isActive ? 0.5 : 0.15,
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-black"
                />
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 30,
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
                        duration: 0.45,
                        ease: "easeOut",
                      }}
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                      "
                    >
                      <div
                        className="
                          mx-auto
                          w-full
                          max-w-7xl
                          px-6
                          sm:px-8
                          lg:px-12
                        "
                      >
                        <div
                          className="
                            max-w-xl
                            text-right
                            text-white
                          "
                        >
                          <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 0.1,
                              duration: 0.4,
                            }}
                            className="
                              text-3xl
                              font-black
                              leading-tight
                              sm:text-4xl
                              lg:text-6xl
                            "
                          >
                            {banner.title}
                          </motion.h2>

                          <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 0.2,
                              duration: 0.4,
                            }}
                            className="
                              mt-4
                              text-base
                              font-medium
                              sm:text-lg
                              lg:text-xl
                            "
                          >
                            {banner.description}
                          </motion.p>

                          <motion.button
                            initial={{
                              opacity: 0,
                              y: 15,
                              scale: 0.95,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              scale: 1,
                            }}
                            transition={{
                              delay: 0.3,
                              duration: 0.4,
                            }}
                            type="button"
                            className="
                              mt-7
                              rounded-full
                              bg-[#E30076]
                              px-7
                              py-3
                              text-sm
                              font-bold
                              text-white
                              transition-all
                              duration-300
                              hover:bg-[#A0003C]
                              hover:shadow-lg
                              sm:px-9
                              sm:py-3.5
                            "
                          >
                            مشاهده محصولات
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Banner;
