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
      border-[var(--border)]
      bg-[var(--card)]
      text-[var(--foreground)]
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-lg
      hover:shadow-[var(--primary)]/20
    "
  >

    <div
      className="
        relative
        aspect-[4/3]
        w-full
        overflow-hidden
        bg-[var(--muted)]
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


    <div className="p-3.5 sm:p-4">
      <h2
        className="
          line-clamp-1
          text-base
          font-black
          text-[var(--foreground)]
          transition-colors
          duration-300
          group-hover:text-[var(--primary)]
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
          text-[var(--muted-foreground)]
          transition-colors
          duration-300
        "
      >
        {description}
      </p>


      <div
        className="
          mt-3
          flex
          items-center
          justify-between
          border-t
          border-[var(--border)]
          pt-3
        "
      >
        <div className="flex items-baseline gap-1">
          <span
            className="
              text-base
              font-black
              text-[var(--foreground)]
              sm:text-lg
            "
          >
            {price.toLocaleString("fa-IR")}
          </span>

          <span
            className="
              text-[10px]
              text-[var(--muted-foreground)]
            "
          >
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
            bg-[var(--primary)]
            text-[var(--primary-foreground)]
            transition-all
            duration-300
            hover:scale-105
            hover:brightness-110
            hover:shadow-md
            hover:shadow-[var(--primary)]/30
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