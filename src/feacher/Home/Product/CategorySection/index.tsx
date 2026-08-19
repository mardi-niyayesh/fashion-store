import ProductSlider from "../ProductSlider";
import { type ProductType } from "../ComponentProduct";
import { ArrowLeft } from "lucide-react";
type CategorySectionProps = {
  title: string;
  products: ProductType[];
};

const CategorySection = ({ title, products }: CategorySectionProps) => {
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <h2
            className="
            mt-7
            flex
            items-center
            gap-2
            border-r-4
            border-[#E30076]
            pr-4
            text-sm
            font-semibold
            leading-7
            text-slate-700
            sm:text-base
          "
          >
            {title}
          </h2>

          <button
            className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    px-5
                    py-2.5
                    font-bold
                    text-[#E30076]
                    cursor-pointer
                  "
          >
            <span>مشاهده همه</span>

            <ArrowLeft size={17} strokeWidth={2} />
          </button>
        </div>

        <ProductSlider products={products} />
      </div>
    </section>
  );
};

export default CategorySection;
