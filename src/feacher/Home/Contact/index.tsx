"use client";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
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
      border-[var(--border)]
      bg-[var(--card)]
      shadow-xl
      shadow-[var(--primary)]/10
      transition-colors
      duration-300
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
        bg-[var(--muted)]
        p-6
        transition-colors
        duration-300
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
            text-[var(--foreground)]
            transition-colors
            duration-300
            sm:text-3xl
          "
          >
            با ما در ارتباط باشید
          </h2>

          <p
            className="
            mt-3
            text-sm
            leading-7
            text-[var(--muted-foreground)]
            transition-colors
            duration-300
          "
          >
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
              border-[var(--border)]
              bg-[var(--card)]
              p-5
              transition-all
              duration-300
              hover:border-[var(--primary)]
              hover:shadow-lg
              hover:shadow-[var(--primary)]/15
            "
            >
              <span
                className="
                text-sm
                font-bold
                text-[var(--foreground)]
                transition-colors
                duration-300
              "
              >
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
                  text-[var(--muted-foreground)]
                  transition-colors
                  duration-300
                  hover:text-[var(--primary)]
                "
                >
                  {item.content}
                </a>
              ) : (
                <p
                  className="
                  mt-2
                  text-sm
                  leading-7
                  text-[var(--muted-foreground)]
                  transition-colors
                  duration-300
                "
                >
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
        bg-[var(--card)]
        p-6
        transition-colors
        duration-300
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
            <h2
              className="
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

            <p
              className="
              mt-3
              text-sm
              leading-7
              text-[var(--muted-foreground)]
              transition-colors
              duration-300
            "
            >
              سوال یا پیشنهادی دارید؟ از طریق فرم زیر با ما در ارتباط باشید.
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
