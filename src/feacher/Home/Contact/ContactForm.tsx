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
  );
};

export default ContactForm;
