"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
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
const ComponentSlidMagazin = () => {
  return (
    <div
      className="
        w-full
        overflow-hidden
        px-4
     
        sm:px-6
        lg:px-8
      
      "
    >
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
  );
};

export default ComponentSlidMagazin;
