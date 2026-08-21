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
  <main
    className="
      bg-[var(--background)]
      py-10
      transition-colors
      duration-300
      sm:py-14
      lg:py-20
    "
  >
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <article
        className="
          overflow-hidden
          rounded-3xl
          border
          border-[var(--border)]
          bg-[var(--card)]
          shadow-sm
          shadow-black/10
          transition-colors
          duration-300
        "
      >

        <div
          className="
            relative
            aspect-[16/8]
            w-full
            overflow-hidden
            bg-[var(--muted)]
          "
        >
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
              text-[var(--foreground)]
              transition-colors
              duration-300
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
              border-[var(--border)]
              py-5
              text-sm
              text-[var(--muted-foreground)]
              transition-colors
              duration-300
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <div className="flex items-center gap-2">
              <span>
                نویسنده:
                <span
                  className="
                    mr-1
                    font-bold
                    text-[var(--foreground)]
                  "
                >
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
                  bg-[var(--muted)]
                  text-[var(--primary)]
                  transition-colors
                  duration-300
                "
              >
                <CalendarDays size={18} />
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
              text-[var(--muted-foreground)]
              transition-colors
              duration-300
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
              border-[var(--border)]
              pt-10
              transition-colors
              duration-300
              sm:mt-16
              sm:pt-12
            "
          >
            <h2
              className="
                mb-5
                text-2xl
                font-black
                text-[var(--foreground)]
                transition-colors
                duration-300
                sm:text-3xl
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
                border-[var(--primary)]
                pr-4
                text-2xl
                font-black
                leading-8
                text-[var(--foreground)]
                transition-colors
                duration-300
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
