import ProductSlider from "../ProductSlider";
import { type ProductType } from "../ComponentProduct";
import { ArrowLeft } from "lucide-react";
type CategorySectionProps = {
  title: string;
  products: ProductType[];
};

const CategorySection = ({ title, products }: CategorySectionProps) => {
 return (
  <section
    className="
      w-full
      bg-[var(--background)]
      px-4
      py-12
      transition-colors
      duration-300
      sm:px-6
      lg:px-8
    "
  >
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 flex items-center justify-between">
 
        <h2
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
          {title}
        </h2>

        <button
          type="button"
          className="
            mt-5
            flex
            cursor-pointer
            items-center
            gap-2
            rounded-xl
            px-5
            py-2.5
            font-bold
            text-[var(--primary)]
            transition-all
            duration-300
            hover:bg-[var(--muted)]
            hover:gap-3
            active:scale-95
          "
        >
          <span>مشاهده همه</span>

          <ArrowLeft
            size={17}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
        </button>
      </div>

      <ProductSlider products={products} />
    </div>
  </section>
);
};

export default CategorySection;
