"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import FashionComponent from "./FashionComponent";

import img1 from "../../../../public/imgs/baner1.jpg";
import img2 from "../../../../public/imgs/baner2.jpg";
import img3 from "../../../../public/imgs/baner3.jpg";
import img4 from "../../../../public/imgs/baner4.jpg";

const articles = [
  {
    id: 1,
    title: "چطور استایل شخصی خودمان را پیدا کنیم؟",
    description:
      "با چند نکته ساده می‌توانید استایلی متناسب با شخصیت، سلیقه و سبک زندگی خودتان بسازید.",
    image: img1,
    nameAuth: "نیایش",
    date: "۱۸ مرداد ۱۴۰۵",
  },
  {
    id: 2,
    title: "چطور لباس‌های ساده را شیک‌تر ست کنیم؟",
    description:
      "با انتخاب درست رنگ‌ها، اکسسوری‌ها و ترکیب آیتم‌های ساده می‌توانید ظاهری جذاب و متفاوت داشته باشید.",
    image: img2,
    nameAuth: "نیلوفر",
    date: "۱۵ مرداد ۱۴۰۵",
  },
  {
    id: 3,
    title: "راهنمای انتخاب لباس مناسب",
    description:
      "قبل از خرید لباس بهتر است با نکات مهم انتخاب سایز، جنس پارچه و تناسب لباس با فرم بدن آشنا شوید.",

    image: img3,
    nameAuth: "نیلا",
    date: "۱۲ مرداد ۱۴۰۵",
  },
  {
    id: 4,
    title: "ترندهای جذاب دنیای مد",
    description:
      "با جدیدترین ترندهای پوشاک آشنا شوید و از آن‌ها برای ساختن استایلی مدرن و منحصربه‌فرد استفاده کنید.",
    image: img4,
    nameAuth: "نیوشا",
    date: "۱۰ مرداد ۱۴۰۵",
  },
];

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

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop
          speed={800}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="!overflow-visible"
        >
          {articles.map((article, index) => (
            <SwiperSlide key={article.id}>
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <FashionComponent
                  title={article.title}
                  description={article.description}
                  image={article.image}
                  nameAuth={article.nameAuth}
                  date={article.date}
                  id={article.id}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FashionMagazine;
