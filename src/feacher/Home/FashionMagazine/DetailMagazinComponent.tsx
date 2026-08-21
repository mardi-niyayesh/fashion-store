import Image from "next/image";
import ContactForm from "../Contact/ContactForm";
import { CalendarDays } from "lucide-react";
import { StaticImageData } from "next/image";
import ComponentSlidMagazin from "./ComponentSlidMagazin";

type DetailType = {
  img: StaticImageData;
  title: string;
  newAuth: string;
  date: string;
  description: string;
};

const DetailMagazinComponent = ({
  img,
  title,
  newAuth,
  date,
  description,
}: DetailType) => {
  return (
    <main className="bg-slate-50 py-10 sm:py-14 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <article
          className="
            overflow-hidden
            rounded-3xl
            border
            border-slate-100
            bg-white
            shadow-sm
            shadow-slate-200/60
          "
        >
          <div className="relative aspect-[16/8] w-full overflow-hidden bg-slate-100">
            <Image
              src={img}
              alt={title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>

          <div className="p-5 sm:p-8 md:p-10 lg:p-14">
            <h1
              className="
                text-2xl
                font-black
                leading-10
                text-slate-900
                sm:text-3xl
                sm:leading-[1.8]
                lg:text-4xl
                lg:leading-[1.8]
              "
            >
              {title}
            </h1>

            <div
              className="
                mt-6
                flex
                flex-col
                gap-3
                border-y
                border-slate-100
                py-5
                text-sm
                text-slate-500
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div className="flex items-center gap-2">
                <span>
                  نویسنده:
                  <span className="mr-1 font-bold text-slate-700">
                    {newAuth}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-pink-50
                    text-[#E30076]
                  "
                >
                  <CalendarDays />
                </span>

                <span>{date}</span>
              </div>
            </div>

            <div
              className="
                mt-8
                text-justify
                text-base
                leading-9
                text-slate-600
                sm:text-lg
                sm:leading-10
              "
            >
              {description}
            </div>

            <section
              className="
                mt-12
                border-t
                border-slate-100
                pt-10
                sm:mt-16
                sm:pt-12
              "
            >
              <h2
                className="
                    text-2xl
                    font-black
                    text-slate-900
                    sm:text-3xl
                    mb-5
                  "
              >
                پیام خود را برای ما ارسال کنید
              </h2>

              <ContactForm />

        
            </section>

                  <div className="mx-auto w-full max-w-7xl">
                <h2
                  className="
             
              mt-8
              mb-8
            flex
            items-center
            gap-2
            border-r-4
            border-[#E30076]
            pr-4
            text-2xl
            font-semibold
            leading-7
            text-slate-700
            
            "
                >
                  مقالات مرتبط
                </h2>
              </div>

              <ComponentSlidMagazin />
          </div>
        </article>
      </div>
    </main>
  );
};

export default DetailMagazinComponent;
