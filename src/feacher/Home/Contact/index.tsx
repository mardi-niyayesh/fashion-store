"use client";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="
      flex
      w-full
      flex-col
      overflow-hidden
      rounded-3xl
      border
      border-pink-100
      shadow-xl
      shadow-pink-100/30
      lg:flex-row
    "
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: -60,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.7,
              ease: "easeOut",
            },
          },
        }}
        className="
        w-full
        bg-pink-50/40
        p-6
        sm:p-8
        md:p-10
        lg:w-1/2
        lg:p-12
      "
      >
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.2,
              },
            },
          }}
          className="mb-8"
        >
          <h2
            className="
            text-2xl
            font-black
            leading-9
            text-slate-900
            sm:text-3xl
          "
          >
            با ما در ارتباط باشید
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            اگر سوالی درباره محصولات، سفارش یا نحوه ارسال دارید، خوشحال می‌شویم
            با ما در ارتباط باشید.
          </p>
        </motion.div>

        <div className="space-y-4">
          {[
            {
              title: "آدرس فروشگاه",
              content: "ایران، تهران",
            },
            {
              title: "شماره تماس",
              content: "09945812125",
              href: "tel:09945812125",
            },
            {
              title: "پشتیبانی",
              content: "همه‌روزه آماده پاسخگویی به شما هستیم.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: {
                  opacity: 0,
                  x: -30,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.3 + index * 0.12,
                  },
                },
              }}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.2,
                },
              }}
              className="
              rounded-2xl
              border
              border-pink-100
              bg-white
              p-5
              transition-shadow
              duration-300
              hover:border-pink-200
              hover:shadow-lg
              hover:shadow-pink-100/50
            "
            >
              <span className="text-sm font-bold text-slate-800">
                {item.title}
              </span>

              {item.href ? (
                <a
                  href={item.href}
                  dir="ltr"
                  className="
                  mt-2
                  inline-block
                  text-sm
                  text-slate-500
                  transition-colors
                  duration-300
                  hover:text-[#E30076]
                "
                >
                  {item.content}
                </a>
              ) : (
                <p className="mt-2 text-sm leading-7 text-slate-500">
                  {item.content}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: 60,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.7,
              delay: 0.15,
              ease: "easeOut",
            },
          },
        }}
        className="
        w-full
        bg-white
        p-6
        sm:p-8
        md:p-10
        lg:w-1/2
        lg:p-12
      "
      >
        <div className="mx-auto max-w-md">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.35,
                },
              },
            }}
            className="mb-7 text-center"
          >
            <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
              پیام خود را برای ما ارسال کنید
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              سوال یا پیشنهادی دارید؟ از طریق فرم زیر با ما در ارتباط باشید.
            </p>
          </motion.div>

          <motion.form
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.45,
                },
              },
            }}
            className="space-y-5"
          >
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                نام
              </label>

              <input
                type="text"
                placeholder="نام خود را وارد کنید"
                className="
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                px-4
                py-3
                text-sm
                text-slate-800
                outline-none
                transition-all
                duration-300
                placeholder:text-slate-400
                focus:border-[#E30076]
                focus:bg-white
                focus:ring-2
                focus:ring-[#E30076]/10
              "
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                ایمیل
              </label>

              <input
                type="email"
                placeholder="example@email.com"
                className="
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                px-4
                py-3
                text-sm
                outline-none
                transition-all
                duration-300
                focus:border-[#E30076]
                focus:bg-white
                focus:ring-2
                focus:ring-[#E30076]/10
              "
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                پیام
              </label>

              <textarea
                rows={5}
                placeholder="پیام خود را بنویسید..."
                className="
                w-full
                resize-none
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                px-4
                py-3
                text-sm
                leading-7
                outline-none
                transition-all
                duration-300
                focus:border-[#E30076]
                focus:bg-white
                focus:ring-2
                focus:ring-[#E30076]/10
              "
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{
                y: -2,
                scale: 1.01,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
              w-full
              rounded-xl
              bg-[#E30076]
              px-4
              py-3
              text-sm
              font-bold
              text-white
              shadow-sm
              shadow-pink-200
              transition-all
              duration-300
              hover:bg-[#C90068]
              hover:shadow-lg
              hover:shadow-pink-200
            "
            >
              ارسال پیام
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
