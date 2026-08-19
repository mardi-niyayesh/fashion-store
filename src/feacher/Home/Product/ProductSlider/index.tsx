"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { type ProductType } from "../ComponentProduct";
import ComponentProduct from "../ComponentProduct";

import "swiper/css";

type ProductSliderProps = {
  products: ProductType[];
};

const ProductSlider = ({ products }: ProductSliderProps) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1.2}
        loop={products.length > 4}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={700}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="!pb-4"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ComponentProduct
              id={product.id}
              img={product.img}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
