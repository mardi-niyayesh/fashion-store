"use client";
import { motion } from "framer-motion";

const ContactForm = () => {
return (
  <div>
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
        <label
          className="
            mb-2
            block
            text-sm
            font-semibold
            text-[var(--foreground)]
            transition-colors
            duration-300
          "
        >
          نام
        </label>

        <input
          type="text"
          placeholder="نام خود را وارد کنید"
          className="
            w-full
            rounded-xl
            border
            border-[var(--border)]
            bg-[var(--muted)]
            px-4
            py-3
            text-sm
            text-[var(--foreground)]
            outline-none
            transition-all
            duration-300
            placeholder:text-[var(--muted-foreground)]
            focus:border-[var(--primary)]
            focus:bg-[var(--card)]
            focus:ring-2
            focus:ring-[var(--primary)]/20
          "
        />
      </div>

      <div>
        <label
          className="
            mb-2
            block
            text-sm
            font-semibold
            text-[var(--foreground)]
            transition-colors
            duration-300
          "
        >
          ایمیل
        </label>

        <input
          type="email"
          placeholder="example@email.com"
          className="
            w-full
            rounded-xl
            border
            border-[var(--border)]
            bg-[var(--muted)]
            px-4
            py-3
            text-sm
            text-[var(--foreground)]
            outline-none
            transition-all
            duration-300
            placeholder:text-[var(--muted-foreground)]
            focus:border-[var(--primary)]
            focus:bg-[var(--card)]
            focus:ring-2
            focus:ring-[var(--primary)]/20
          "
        />
      </div>
      <div>
        <label
          className="
            mb-2
            block
            text-sm
            font-semibold
            text-[var(--foreground)]
            transition-colors
            duration-300
          "
        >
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
            border-[var(--border)]
            bg-[var(--muted)]
            px-4
            py-3
            text-sm
            leading-7
            text-[var(--foreground)]
            outline-none
            transition-all
            duration-300
            placeholder:text-[var(--muted-foreground)]
            focus:border-[var(--primary)]
            focus:bg-[var(--card)]
            focus:ring-2
            focus:ring-[var(--primary)]/20
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
          bg-[var(--primary)]
          px-4
          py-3
          text-sm
          font-bold
          text-[var(--primary-foreground)]
          shadow-sm
          shadow-[var(--primary)]/20
          transition-all
          duration-300
          hover:brightness-110
          hover:shadow-lg
          hover:shadow-[var(--primary)]/30
        "
      >
        ارسال پیام
      </motion.button>
    </motion.form>
  </div>
);
};

export default ContactForm;
