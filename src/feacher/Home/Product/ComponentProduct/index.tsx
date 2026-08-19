"use client";

import Image from "next/image";
import { ShoppingBasket } from "lucide-react";

export type ProductType = {
  id: number;
  img: string;
  title: string;
  description: string;
  price: number;
};

const ComponentProduct = ({
  img,
  title,
  description,
  price,
}: ProductType) => {
  return (
    <article
      className="
        group
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-slate-100
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        hover:shadow-pink-100/50
      "
    >
      {/* Image */}
      <div
        className="
          relative
          aspect-[4/3]
          w-full
          overflow-hidden
          bg-slate-100
        "
      >
        <Image
          src={img}
          alt={title}
          fill
          sizes="
            (max-width: 640px) 90vw,
            (max-width: 1024px) 33vw,
            25vw
          "
          className="
            object-cover
            transition-transform
            duration-500
            ease-out
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="p-3.5 sm:p-4">
        <h2
          className="
            line-clamp-1
            text-base
            font-black
            text-slate-900
            transition-colors
            duration-300
            group-hover:text-[#E30076]
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-1.5
            line-clamp-2
            min-h-10
            text-xs
            leading-5
            text-slate-500
          "
        >
          {description}
        </p>

        {/* Price + Cart */}
        <div
          className="
            mt-3
            flex
            items-center
            justify-between
            border-t
            border-slate-100
            pt-3
          "
        >
          <div className="flex items-baseline gap-1">
            <span
              className="
                text-base
                font-black
                text-slate-900
                sm:text-lg
              "
            >
              {price.toLocaleString("fa-IR")}
            </span>

            <span className="text-[10px] text-slate-400">
              تومان
            </span>
          </div>

          <button
            type="button"
            aria-label={`افزودن ${title} به سبد خرید`}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              bg-[#E30076]
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#A0003C]
              hover:shadow-md
              hover:shadow-pink-200
              active:scale-95
            "
          >
            <ShoppingBasket
              size={18}
              strokeWidth={1.8}
            />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ComponentProduct;